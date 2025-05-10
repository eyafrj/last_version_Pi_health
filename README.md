# NeoMedix – Full Stack Healthcare BI & AI Application

NeoMedix est une application web complète combinant un backend Python (Flask) avec des modèles de machine learning, et un frontend Angular. Elle a pour objectif de faciliter la gestion hospitalière à travers des prédictions intelligentes (admissions, coûts, performances cliniques).

---

## ⚙️ Technologies utilisées

* **Backend** : Python, Flask, scikit-learn, XGBoost, Prophet, joblib
* **Frontend** : Angular, TypeScript, Bootstrap
* **Visualisation** : Power BI Desktop & Power BI Service
* **Base de données** : PostgreSQL (facultatif)
* **Autres outils** : FlashBack.ai (tests IA), Talend (ETL)

---

## 🗂️ Structure du projet

Le projet est structuré comme suit :

```
NeoMedix/
│
├── backend/
│   ├── app/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── services/
│   │   └── main.py
│   ├── requirements.txt
│   └── config.py
│
├── frontend/
│   ├── src/
│   │   ├── app/
│   │   ├── assets/
│   │   └── environments/
│   ├── angular.json
│   └── package.json
│
├── data/
│   ├── raw_data/
│   └── processed_data/
│
└── README.md
```

---

## 🔧 Prérequis

Avant de commencer, assurez-vous d'avoir installé les outils suivants :

* **Python** version 3.7 ou plus
* **Node.js** version 12 ou plus
* **PostgreSQL** (facultatif)
* **Power BI Desktop** pour les rapports (facultatif)

---

## 🚀 Déploiement

Suivez ces étapes pour déployer l'application :

### Backend (Flask)

1. Clonez le repository du projet :
    ```bash
    git clone https://github.com/eyafrj/last_version_Pi_health.git
    cd NeoMedix/backend
    ```

2. Créez un environnement virtuel et activez-le :
    ```bash
    python -m venv venv
    source venv/bin/activate   # Sur Linux/macOS
    venv\Scriptsctivate      # Sur Windows
    ```

3. Installez les dépendances :
    ```bash
    pip install -r requirements.txt
    ```

4. Configurez les variables d'environnement (ex. base de données, clés API) dans un fichier `.env` :
    ```bash
    touch .env
    ```

5. Lancez le serveur Flask :
    ```bash
    python app.py
    ```

Le backend sera accessible sur `http://localhost:5000`.

### Frontend (Angular)

1. Allez dans le répertoire frontend :
    ```bash
    cd NeoMedix/frontend
    ```

2. Installez les dépendances :
    ```bash
    npm install
    ```

3. Lancez l'application Angular :
    ```bash
    ng serve
    ```

Le frontend sera accessible sur `http://localhost:4200`.

### Base de données (PostgreSQL)

1. Créez une base de données PostgreSQL et configurez les paramètres de connexion dans le fichier `config.py` du backend.

2. Exécutez les migrations pour créer les tables nécessaires :
    ```bash
    python manage.py db upgrade
    ```

---

## 📊 Utilisation

1. 🔗 [Accéder à l'application NeoMedix](http://localhost:4200/login)

2. L'interface utilisateur permet de :

   - Visualiser les prédictions des admissions et des coûts hospitaliers
   - Analyser les performances cliniques via des graphiques interactifs
   - Utiliser des modèles d'IA pour prédire les résultats en fonction des données

---

## 🤖 Modèles d'IA

Les modèles de machine learning utilisés dans ce projet sont les suivants :

- **scikit-learn** : pour les modèles de régression et de classification
- **XGBoost** : pour les modèles d'arbres de décision
- **Prophet** : pour les prévisions temporelles

Les modèles sont pré-entraînés et sauvegardés dans des fichiers `.joblib` et sont chargés dynamiquement lors de l'exécution.

---

## 🔄 Contribution

Nous accueillons toutes les contributions ! Si vous souhaitez contribuer, veuillez suivre ces étapes :

1. Fork ce repository.
2. Créez une branche pour votre fonctionnalité (`git checkout -b feature/nom-de-la-fonctionnalité`).
3. Committez vos modifications (`git commit -am 'Ajout de ma fonctionnalité'`).
4. Poussez vos changements (`git push origin feature/nom-de-la-fonctionnalité`).
5. Créez une pull request.

---

## 📝 Licence

Ce projet est sous licence MIT - voir le fichier [LICENSE](LICENSE) pour plus de détails.

---

## 📢 Liens utiles


- **Application en ligne** 🔗 🔗 [Accéder à l'application NeoMedix](http://localhost:4200/login)
