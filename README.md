# HNG12 Stage 0 - Public API  

This is a simple **public API** for HNG12 Stage 0. It provides basic information, including:

- The **registered email** used for HNG12 Slack  
- The **current datetime** in ISO 8601 format (UTC)  
- The **GitHub repository URL** of this project  

## **Technology Stack**  

- **Node.js**
- TypeScript
- Hosted with Render

---

## **Getting Started**  

### **1. Clone the Repository**  
```bash
git clone https://github.com/alexindevs/HNG12_Backend_Stage0.git
cd HNG12_Backend_Stage0
```

### **2. Install Dependencies**

```bash
npm install
```

### **3. Create a `.env` File**  
Create a `.env` file in the project root and add:  
```env
PORT=7000
```

### **4. Run the API**  

#### **Development Mode (Auto-reloads on changes)**  

```bash
npm run dev
```

#### **Production Mode**  

```bash
npm run build
npm start
```

---

## **API Documentation**  

### **Base URL:**  
```
https://hng12-backend-stage0-fe93.onrender.com/
```

### **Endpoint:**

```
GET /
```

### **Response Format (200 OK)*

```json
{
  "email": "alexindevs@gmail.com",
  "current_datetime": "2025-01-29T17:25:00Z",
  "github_url": "https://github.com/alexindevs/HNG12_Backend_Stage0"
}
```

### **Example Usage**  
Using **cURL**:  
```bash
curl -X GET https://hng12-backend-stage0-fe93.onrender.com/
```

Using **JavaScript (fetch API)**:

```js
fetch('https://hng12-backend-stage0-fe93.onrender.com/')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
```

---

## **Deployment**

This API is deployed [here](https://hng12-backend-stage0-fe93.onrender.com/).

---

## Hire Developers from HNG

Looking to hire **Node.js developers**? Visit:  
🔗 [https://hng.tech/hire/nodejs-developers](https://hng.tech/hire/nodejs-developers)
