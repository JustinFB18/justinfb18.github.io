<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Consumiendo API desde Lambda</title>
    <script>
        // Función para hacer la solicitud a la API de Lambda
        async function fetchApiData() {
            try {
                // URL de tu API Gateway
                const url = "https://6b5pjcmuo1.execute-api.us-east-1.amazonaws.com/production/tasks";
                
                // Realizar la solicitud GET
                const response = await fetch(url);
                
                // Verificar si la respuesta es exitosa
                if (!response.ok) {
                    throw new Error("Error en la respuesta de la API");
                }
                
                // Convertir la respuesta a JSON
                const data = await response.json();
                
                // Mostrar los datos en la página
                document.getElementById('apiResponse').innerText = JSON.stringify(data, null, 2);
            } catch (error) {
                console.error("Error al consumir la API:", error);
                document.getElementById('apiResponse').innerText = "Hubo un error al consumir la API.";
            }
        }

        // Llamar a la función cuando la página cargue
        window.onload = fetchApiData;
    </script>
</head>
<body>
    <h1>Consumiendo la API de Lambda</h1>
    <pre id="apiResponse">Cargando datos...</pre>
</body>
</html>
