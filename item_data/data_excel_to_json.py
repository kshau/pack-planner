import pandas as pd

df = pd.read_excel(r'.\BackpackExports.xlsx')
df_select = df[['Title', 'Price', 'pbkm8qmjiiueqthrk9pc3', 'pbkm8qmjiiueqthrk9pc5']]
df_select.columns = ['name', 'price', 'volume', 'weight']


# Create the JSON structure
itemData = [
    {
        "name": "Essentials",
        "items": [
            {
                "name": "Backpack",
                "description": row['name'],
                "weight": {
                    "number": float(row['weight'].split()[0]),
                    "unit": row['weight'].split()[1]
                },
                "price": row['price'].replace('$', '')
            }
            for index, row in df_select.iterrows()
        ]
    }
]

# Convert to JSON string
import json
json_data = json.dumps(itemData, indent=2)

with open('backpack_data.json', 'w') as f:
    f.write(json_data)