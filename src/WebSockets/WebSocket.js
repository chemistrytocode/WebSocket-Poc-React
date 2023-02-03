import * as signalR from "@microsoft/signalr";

const quoteWebsocket = () => {
    const connection = new signalR.HubConnectionBuilder()
        .withUrl("https://localhost:7113/quoteNumberHub")
        .configureLogging(signalR.LogLevel.Trace)
        .build();

    async function start() {
        await connection.start();
    }

    async function stop() {
        await connection.stop();
    }

    function callQuoting() {
        // This is the method on the backend / Dotnet codebase.
        // E.g. I am invoking SendQuoteNumber /w these parameters.
        connection.invoke
            ("SendQuoteNumber",
                "aHR0cHM6Ly9xdW90aW5nLWVucXVpcnktb3JjaGVzdHJhdG9yLTEtc2hhZG93LnZhc3NpbHkuaW8vcmVjb25zL2FIUjBjSE02THk5eGRXOTBhVzVuTFhOb1lXUnZkeTV6WlhKblpXbHpMV1JoZEdGalpXNTBaWEl1WTI4dWRXc3ZjbVZqYjI1ekx6TmpPRE0zWkdNNExUTTBZelV0TkRFeU1DMDROelpoTFRNd1l6azVNMk5qTUdFNU13",
                {
                    "ctm-causation-id": "6076ad9b-9919-4d79-9123-87d04821e8a9",
                    "ctm-correlation-id": "bfbc38a9-3026-47db-b67d-cf94d7cd78c1",
                    "ctm-session-id": "223aa7e9-8121-41d9-9ab1-99acf6829f19",
                    "ctm-visitor-id": "665fd820-d256-47c3-8936-8b632e7ef3bb"
                })
    };

    function setupListeners() {
        // This are the events that the backend / Dotnet codebase is omitting
        // E.g. When I recieve SendUpdateQuoteNumber, I should do someting
        connection.on("SendUpdateQuoteNumber", (message) => {
            const li = document.createElement("li");
            li.textContent = `${message}`;
            document.getElementById("messageList").appendChild(li);
        });

        connection.on("SendQuotesComplete", (message) => {
            const li = document.createElement("li");
            li.textContent = `QUOTES COMPLETE!`;
            document.getElementById("messageList").appendChild(li);
        });
    }
};

export default quoteWebsocket;

