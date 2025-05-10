
---

## ⚙️ Technologies

- 🧠 Python (Prophet, Scikit-learn, Pandas)
- 🗃️ PostgreSQL
- 📊 Power BI Desktop + Service
- 🔄 Talend Open Studio (ETL)
- 🧪 FlashBack (pour tests IA et visualisation intermédiaire)

---

## 🚀 Étapes de déploiement suivies

### 🧩 1. Préparation des données

- Téléchargement des fichiers sources CSV (coûts, admissions, ICU...)
- Nettoyage initial via **Python** (pandas)
- Fusion et structuration avec Power Query dans Power BI

### 🧠 2. Modélisation IA (local avec Python)



#####
## 🚀 Démo en ligne

🔗 [Accéder à l'application NeoMedix](https://http://localhost:4200/login) 

```bash
# Environnement virtuel (facultatif)
python -m venv venv
source venv/bin/activate     # ou venv\Scripts\activate sous Windows

# Installer les dépendances
pip install -r requirements.txt

# Lancer la prévision des coûts hospitaliers
python scripts/forecast_costs.py

# Lancer la prévision des admissions ICU
python scripts/predict_admissions.py
