# filepath: backend/main.py
from fastapi import FastAPI, WebSocket



app = FastAPI()

@app.get("/")
def read_root():
    return {"message": "Hello, world!"}

@app.websocket("/ws")
async def websocket_endpoint(websocket: WebSocket):
    await websocket.accept()
    while True:
        data = await websocket.receive_text()
        await websocket.send_text(f"Message received: {data}")