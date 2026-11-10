# CardioCheck

**Academic web application combining patient management and machine learning inference for heart disease risk classification.**

CardioCheck brings a trained model into a web workflow: a doctor account can manage patient records, enter clinical attributes and request a classification through a Flask backend. The project combines Python, PostgreSQL and a browser interface built with HTML, CSS and JavaScript.

Developed as a collaborative undergraduate project in Engineering and Data Science at the University of Coimbra (2024). The application interface and most project documentation are in Portuguese.

> Educational prototype. This repository does not establish clinical validity and must not be used for diagnosis or medical decisions. Use synthetic data for demonstrations.

## Features

- Doctor registration, login and logout, using Flask-Login and password hashing.
- Account profile editing, password changes and account deletion.
- Patient registration, search, profile viewing, editing and deletion.
- A clinical input form connected to a machine learning inference endpoint.
- A saved preprocessing object and model loaded with Joblib.
- PostgreSQL persistence with SQLAlchemy models for doctors, patients and predictions.
- Docker and Docker Compose configuration for the application and database.
- Requirements, use cases, architecture documentation and test scenarios.

Prediction persistence is present in the code but requires corrections described under **Current limitations**.

## Technology stack

| Layer | Technologies |
| --- | --- |
| Backend | Python, Flask, Flask-Login |
| Frontend | HTML, CSS, JavaScript, Jinja templates |
| Database | PostgreSQL, SQLAlchemy, Flask-SQLAlchemy |
| ML inference | scikit-learn, pandas, NumPy, Joblib |
| Environment | Docker, Docker Compose |
| Browser test script | Selenium, Firefox, GeckoDriver |

## How prediction works

1. The browser collects 13 clinical attributes from the prediction form.
2. JavaScript sends a JSON request to `POST /predict`.
3. Flask constructs a pandas DataFrame with the expected feature order.
4. The saved scaler transforms the input, and the saved model produces a class prediction.
5. The backend returns `{"prediction": <integer class>}`. The interface displays class `1` as high risk and the other class as low risk.

The endpoint returns a **class label**, not a calibrated risk probability.

Expected input fields, in order:

```text
age, sex, cp, trtbps, chol, fbs, restecg,
thalachh, exng, oldpeak, slp, caa, thall
```

The model artifacts are stored in `Code/website/model/`:

- `modelo_previsao.joblib`: serialized prediction model.
- `scaler.joblib`: serialized preprocessing object.

The supplied repository contains inference artifacts but no training pipeline, training dataset or reproducible evaluation report. No model performance claims are made here.

## Repository guide

| Path | Contents |
| --- | --- |
| [`Code/`](Code/) | Application source, dependencies and Docker configuration |
| [`Code/website/`](Code/website/) | Flask application factory, blueprints and database models |
| [`Code/website/templates/`](Code/website/templates/) | Server-rendered pages and form interactions |
| [`Code/website/static/`](Code/website/static/) | Stylesheets, JavaScript and images |
| [`Code/website/model/`](Code/website/model/) | Serialized model and scaler |
| [`Code/instance/database.sql`](Code/instance/database.sql) | Database initialization script |
| [`Requirements/`](Requirements/) | User stories and use cases |
| [`Architecture/`](Architecture/) | Architecture diagram and quality attributes |
| [`Design/`](Design/) | Design references |
| [`Testing/`](Testing/) | Written test scenarios and expected outcomes |
| [`Code/QualityTests/`](Code/QualityTests/) | Selenium script for concurrent registration attempts |

## Running locally

The repository provides a Docker setup using a Python 3.9 application image and a PostgreSQL service. **The current snapshot has known implementation issues; these commands describe the supplied setup, not a verified clean installation.** Review the limitations below before running it.

With Docker and Docker Compose installed, open a terminal at the repository root:

```bash
cd Code
docker compose up --build
```

Once the services start successfully, open <http://localhost:5000>.

The Compose configuration:

- Exposes the application on port `5000` and PostgreSQL on port `5432`.
- Supplies the database connection through `DATABASE_URL`.
- Initializes a new database volume with `instance/database.sql`.
- Stores PostgreSQL data in the named `postgres_data` volume.

To stop the services while retaining the database volume:

```bash
docker compose down
```

The SQL initialization script runs when PostgreSQL initializes an empty data directory; editing that script does not migrate an existing database.

## Current limitations

This is an academic prototype, with several areas to address before a reliable public demo:

- **Database initialization:** `website/__init__.py` creates another SQLAlchemy instance instead of consistently initializing the shared instance from `website/extensions.py`. The extension setup needs to be unified.
- **Saving predictions:** the route passes `numUtente` to a model whose attribute is `numutente`; the browser also sends a fixed patient ID. The falsy-value check rejects a numeric prediction of `0`. These issues need correction before prediction history can be relied upon.
- **Reproducibility:** dependencies use older pinned versions, while the database image uses `postgres:latest`. Installation and artifact compatibility need to be revalidated with a fixed environment.
- **Demo configuration:** the application contains a hard-coded session secret, development settings and example database credentials. Several data-changing or prediction routes lack authentication decorators. These require review before deployment.
- **Portfolio packaging:** personal contact seed records, internal team profiles and meeting minutes, the original Git metadata, Python caches and the bundled GeckoDriver executable have been omitted from this copy. Team authorship is retained below.

## Testing

The [`Testing/`](Testing/) directory contains manual test specifications covering account access, account management, patient registration, prediction and quality attributes. These documents describe scenarios and expected outcomes; they are not evidence of an automatically passing test suite.

`Code/QualityTests/performance.py` launches concurrent registration attempts with Selenium. It uses Windows-specific Firefox and GeckoDriver paths, requires a running application, and creates records. Adapt the paths and use a disposable database before running it. It is not a measured performance benchmark.

## Team

- Daniel Monteiro
- Francisco Rua
- Gustavo Sousa
- Guilherme Cardoso
- Íris Sousa

This repository represents collaborative academic work.
