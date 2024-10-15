# Define a function to calculate points based on the actual result and the user's tip
def calculate_points(home_goals_real, guest_goals_real, home_goals_tip, guest_goals_tip):
    # Case 1: Exact result is predicted correctly
    if home_goals_real == home_goals_tip and guest_goals_real == guest_goals_tip:
        return 3
    # Case 2: Only the goal difference is correct
    elif (home_goals_real - guest_goals_real) == (home_goals_tip - guest_goals_tip):
        return 2
    # Case 3: Only the winner is correct (or the draw is predicted correctly)
    elif (home_goals_real > guest_goals_real and home_goals_tip > guest_goals_tip) or \
         (home_goals_real < guest_goals_real and home_goals_tip < guest_goals_tip) or \
         (home_goals_real == guest_goals_real and home_goals_tip == guest_goals_tip):
        return 1
    # Case 4: The tip is completely wrong
    else:
        return 0

# Abfrage basierend auf personen_id
def get_endplazierung_1(personen_id):
    cursor = conn.cursor()
    cursor.execute("SELECT Endplazierung_1 FROM Endplazierung WHERE personen_id = ?", (str(personen_id),))
    result = cursor.fetchone()
    if result:
        return result[0]
    else:
        return None
    
def update_punkte(person_id, new_punkte):
    
    cursor = conn.cursor()
    update_query = """
    UPDATE Personen
    SET points = ?
    WHERE _id = ?
    """
    cursor.execute(update_query, (str(new_punkte), str(person_id)))
    conn.commit()  # Änderungen in der Datenbank speichern
    print(f"Punkte für Person mit _id {person_id} erfolgreich aktualisiert.")
    
    
import sqlite3
import pandas as pd
import os
path = os.path.join(os.getcwd(),"24_25_Tippspiel.db")

# Verbindung zur SQLite-Datenbank herstellen
#conn = sqlite3.connect(r"C:\Users\flost\OneDrive\4_Privat\2_Sport\Fussball\24_25_Tippspiel.db")#r'C:\Users\FS\OneDrive\4_Privat\2_Sport\Fussball\24_25_Tippspiel.db")  # ersetze 'datenbank.db' durch den Pfad zu deiner SQLite-Datei
conn = sqlite3.connect(path)

# SQL-Abfrage ausführen und alle Einträge abrufen
query = "SELECT * FROM Tipps1"
df = pd.read_sql_query(query, conn)

# Verbindung schließen
#conn.close()

# Ausgabe des DataFrames
print(df)

# Optional: Wenn du es als numpy array haben möchtest
numpy_array = df.to_numpy()
print(numpy_array)
# SQL-Abfrage ausführen und alle Einträge aus der Tabelle "Spiele" abrufen
query = "SELECT * FROM Spiele"
df_spiele = pd.read_sql_query(query, conn)


# Ausgabe des DataFrames
print(df_spiele)
for person_id in df['personen_id'].unique():
    
    print(person_id)
    person_data = df[df['personen_id'] == person_id]
    punkte=0
    for spiel_id in person_data['spiele_id']:
        
        home_goals_tip=person_data[person_data["spiele_id"]==spiel_id]['Heim']
        guest_goals_tip=person_data[person_data["spiele_id"]==spiel_id]['Gast']
        spiel_id = df_spiele[df_spiele['_id'] == spiel_id]
        home_goals_real=spiel_id['Tore_Heim']
        guest_goals_real=spiel_id['Tore_Gast']
        points=calculate_points(home_goals_real.iloc[0], guest_goals_real.iloc[0], home_goals_tip.iloc[0], guest_goals_tip.iloc[0])
        punkte+=points
        print(points)
      
    endplazierung_1 = get_endplazierung_1(person_id)
    if(endplazierung_1==2):
        punkte+=3
    update_punkte(person_id, punkte)


conn.close()