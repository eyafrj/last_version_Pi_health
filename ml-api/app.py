from flask import Flask, request, jsonify
from flask_cors import CORS
import joblib
import numpy as np
import pandas as pd
from sklearn.cluster import SpectralClustering
from sklearn.metrics import silhouette_score, davies_bouldin_score
from tensorflow.keras.models import load_model
from tensorflow.keras.preprocessing.image import load_img, img_to_array
from io import BytesIO
import os
import numpy as np
import pandas as pd
from PIL import Image
app = Flask(__name__)

# Autoriser uniquement Angular (localhost:4200)
CORS(app, origins=["http://localhost:4200"])




# Modèle XGBoost (nouveau)
try:
    xgboost_model = joblib.load('lr_model.pkl')
    print("Modèle XGBoost chargé avec succès.")
except Exception as e:
    print(f"Erreur lors du chargement du modèle XGBoost : {e}")
    xgboost_model = None

# Route de prédiction XGBoost (nouvelle route)




# Charger le modèle CNN
try:
    cnn_model = load_model('model.h5')
    print("Modèle CNN chargé avec succès.")
except Exception as e:
    print(f"Erreur lors du chargement du modèle CNN : {e}")
    cnn_model = None


# === Chargement des modèles ===


scaler = joblib.load("scaler.pkl")
pca = joblib.load("pca.pkl")



# Modèle KNN
try:
    knn_model = joblib.load('decision_tree_model.pkl')
except Exception as e:
    print(f"Erreur lors du chargement du modèle KNN : {e}")
    knn_model = None

# Modèle de prédiction de médicament
try:
    drug_model = joblib.load('drug_prediction_modelss.pkl')
    label_map = joblib.load('label_map.pkl')
except Exception as e:
    print(f"Erreur lors du chargement des modèles médicament : {e}")
    drug_model = None
    label_map = None

# Modèle de régression
try:
    regression_model = joblib.load('regression_model.pkl')
except Exception as e:
    print(f"Erreur lors du chargement du modèle de régression : {e}")
    regression_model = None

# === Routes ===

@app.route('/predict', methods=['POST'])
def predict():
    try:
        data = request.get_json()
        required_keys = ['Admission_Count', 'ICU_Admission', 'Gender', 'Bmi', 'Weight', 'Height']
        if not all(k in data for k in required_keys):
            return jsonify({'error': 'Données manquantes'}), 400

        input_df = pd.DataFrame([{
            'Admissionn_Count': float(data['Admission_Count']),
            'ICU_Admission': float(data['ICU_Admission']),
            'Gender': float(data['Gender']),
            'Bmi': float(data['Bmi']),
            'Weight': float(data['Weight']),
            'Height': float(data['Height'])
        }])

        if knn_model is None:
            return jsonify({'error': 'Le modèle KNN n\'est pas disponible'}), 500

        prediction = knn_model.predict(input_df)[0]
        return jsonify({'prediction': int(prediction)})

    except Exception as e:
        print(f"Erreur KNN : {e}")
        return jsonify({'error': 'Erreur interne du serveur'}), 500


# Route de prédiction de type de médicament

@app.route('/predict_drug', methods=['POST'])
def predict_drug():
    try:
        data = request.get_json()
        print(f"Données reçues : {data}")

        features = pd.DataFrame([[
            float(data['dose_val_rx']),
            data['route'],
            data['Gender'],
            float(data['Weight']),
            float(data['Bmi'])
        ]], columns=['dose_val_rx', 'route', 'Gender', 'Weight', 'Bmi'])

        features = pd.get_dummies(features, columns=['route', 'Gender'], drop_first=True)
        print(f"Features après encodage :\n{features}")

        for col in drug_model.feature_names_in_:
            if col not in features.columns:
                features[col] = 0

        features = features[drug_model.feature_names_in_]
        print(f"Features après réorganisation :\n{features}")

        prediction = drug_model.predict(features)[0]
        predicted_label = label_map[prediction]
        return jsonify({'prediction': predicted_label})

    except Exception as e:
        print(f"Erreur médicament : {e}")
        return jsonify({'error': 'Erreur interne du serveur'}), 500


# Route de prédiction régression (exemple : prédiction d'une valeur numérique)
@app.route('/predict_regression', methods=['POST'])
def predict_regression():
    try:
        data = request.get_json()
        required_keys = [ 'Weight', 'Height', 'Bmi', 'Gender_M']  # À adapter selon ton modèle
        if not all(k in data for k in required_keys):
            return jsonify({'error': 'Données manquantes pour la régression'}), 400

        features = np.array([
           
            float(data['Weight']),
            float(data['Height']),
            float(data['Bmi']),
            float(data['Gender_M'])
        ]).reshape(1, -1)

        if regression_model is None:
            return jsonify({'error': 'Le modèle de régression n\'est pas disponible'}), 500

        prediction = regression_model.predict(features)[0]
        return jsonify({'prediction': float(prediction)})

    except Exception as e:
        print(f"Erreur régression : {e}")
        return jsonify({'error': 'Erreur interne du serveur'}), 500
    






@app.route('/predict_cnn', methods=['POST'])
def predict_cnn():
    try:
        if 'file' not in request.files:
            return jsonify({'error': 'Aucun fichier reçu'}), 400

        file = request.files['file']
        print(f"Nom du fichier reçu : {file.filename}")

        # Redimensionner l'image à (128, 128) et convertir en niveaux de gris
        img = load_img(BytesIO(file.read()), target_size=(128, 128), color_mode='grayscale')  # Convertir en niveaux de gris
        img_array = img_to_array(img) / 255.0  # Normalisation
        img_array = np.expand_dims(img_array, axis=0)  # Ajouter la dimension batch

        # Vérifier la forme de l'image
        print(f"Shape de l'image : {img_array.shape}")

        # Vérifier si le modèle est chargé
        if cnn_model is None:
            return jsonify({'error': 'Modèle CNN non disponible'}), 500

        # Prédiction
        prediction = cnn_model.predict(img_array)
        print(f"Prédiction brute : {prediction}")

        # Traitement du résultat selon la logique
        result = "Stroke" if prediction[0][0] > 0.5 else "Normal"

        return jsonify({'prediction': result})

    except Exception as e:
        print(f"Erreur pendant la prédiction : {str(e)}")
        return jsonify({'error': 'Erreur interne du serveur'}), 500
# === Lancer l'application Flask ===

















try:
    scaler = joblib.load("scaler.pkl")  # Charger le scaler
    kmeans_model = joblib.load("KMeans.pkl")  # Charger le modèle KMeans
    print("Modèles chargés avec succès.")
except Exception as e:
    print(f"Erreur lors du chargement des modèles : {e}")

# === Route pour prédire les clusters ===
@app.route('/predict_clustering', methods=['POST'])
def predict_clustering():
    try:
        # Récupérer les données JSON envoyées par le client
        data = request.get_json()
        print(f"Données reçues : {data}")
        
        # Vérifier que les colonnes nécessaires sont présentes
        required_keys = ['Nb_Diagnoses', 'Nb_Procedures', 'Gender_M']
        if not all(k in data for k in required_keys):
            return jsonify({"error": "Les champs 'Nb_Diagnoses', 'Nb_Procedures', et 'Gender_M' sont requis."}), 400

        # Préparer les données pour la prédiction
        input_data = np.array([[data['Nb_Diagnoses'], data['Nb_Procedures'], data['Gender_M']]])
        print(f"Input data : {input_data}")

        # Normaliser les données
        if scaler is None:
            return jsonify({"error": "Le scaler n'est pas disponible."}), 500
        input_scaled = scaler.transform(input_data)
        print(f"Input scaled : {input_scaled}")

        # Prédire les clusters avec KMeans
        if kmeans_model is None:
            return jsonify({"error": "Le modèle de clustering n'est pas disponible."}), 500
        cluster_labels = kmeans_model.predict(input_scaled)
        print(f"Cluster labels : {cluster_labels}")

        # Retourner le cluster pour la nouvelle donnée (premier échantillon)
        return jsonify({
            "cluster": int(cluster_labels[0]),
        })

    except Exception as e:
        print(f"Erreur lors de la prédiction : {e}")
        return jsonify({"error": "Erreur interne du serveur"}), 500





# Modèle XGBoost (nouveau)
try:
    xgboost_model = joblib.load('best_xgboost_model.pkl')
    print("Modèle XGBoost chargé avec succès.")
except Exception as e:
    print(f"Erreur lors du chargement du modèle XGBoost : {e}")
    xgboost_model = None

# Route de prédiction XGBoost (nouvelle route)





# Route de prédiction
@app.route('/predict_xgboost', methods=['POST'])
def predict_xgboost():
    try:
        data = request.get_json()
        print(f"📨 Données reçues : {data}")

        # Vérification et construction du vecteur de caractéristiques
        features = np.array([
            float(data['Facility_Cost']) if 'Facility_Cost' in data else 0,
            float(data['Procedure_Cost']) if 'Procedure_Cost' in data else 0,
            float(data['ICU_Stay']) if 'ICU_Stay' in data else 0,
            float(data['normal_Admission_Stay']) if 'normal_Admission_Stay' in data else 0,
            float(data['Department_Type']) if 'Department_Type' in data else 0,
        ]).reshape(1, -1)

        if xgboost_model is None:
            return jsonify({'error': 'Le modèle XGBoost n\'est pas disponible'}), 500

        # Prédiction
        prediction = xgboost_model.predict(features)[0]
        return jsonify({'prediction': float(prediction)})

    except Exception as e:
        print(f"❌ Erreur lors de la prédiction XGBoost : {str(e)}")
        return jsonify({'error': 'Erreur interne du serveur'}), 500












try:
    pipeline = joblib.load('xgboost_pipeline_facility.pkl')
    print("✅ Pipeline complet chargé avec succès.")
except Exception as e:
    print(f"❌ Erreur lors du chargement du pipeline : {e}")
    pipeline = None

@app.route('/predict_xgboostt', methods=['POST'])
def predict_xgboostt():
    try:
        data = request.get_json()
        print(f"📨 Données reçues : {data}")

        required_keys = [
            "Procedure_Cost", "ICU_Stay", "normal_Admission_Stay",
            "Department_Type", "Cost_Ratio", "Stay_Ratio", "Total_Stay",
            "Cost_Per_Day", "Procedure_Cost_Per_Day"
        ]

        if not all(k in data for k in required_keys):
            missing = set(required_keys) - set(data.keys())
            return jsonify({'error': f'Données manquantes : {missing}'}), 400

        # Construction du DataFrame
        input_df = pd.DataFrame([{
            key: float(data[key]) for key in required_keys
        }])

        # Vérification du pipeline
        if pipeline is None:
            return jsonify({'error': 'Le pipeline n\'est pas disponible'}), 500

        # Prédiction log-transformée
        log_prediction = pipeline.predict(input_df)[0]
        
        # Convertir le résultat de prédiction en type float natif pour éviter l'erreur de sérialisation JSON
        prediction = float(np.expm1(log_prediction))  # Transformation inverse de log1p

        return jsonify({'prediction': prediction})

    except Exception as e:
        print(f"❌ Erreur lors de la prédiction : {e}")
        return jsonify({'error': 'Erreur interne du serveur'}), 500

if __name__ == "__main__":
    app.run(debug=True)


