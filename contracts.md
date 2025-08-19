# Contratos de API - Portfólio Joseliano Silva

## Resumo do Projeto
Site de portfólio profissional com design minimalista usando paleta azul marinho, cinza e branco. Frontend desenvolvido com React usando dados mock, necessita integração com backend FastAPI + MongoDB.

## Dados Mockados (mock.js)
### Estrutura de dados atualmente em mock:
- `personalInfo`: Informações pessoais e contato
- `experiences`: Histórico profissional detalhado  
- `education`: Formação acadêmica
- `skills`: Habilidades técnicas, interpessoais e idiomas
- `projects`: Projetos em destaque
- `achievements`: Principais conquistas
- `certifications`: Certificações profissionais

## APIs Necessárias

### 1. Contact Form API
**Endpoint:** `POST /api/contact`
**Funcionalidade:** Receber e armazenar mensagens do formulário de contato

**Request Body:**
```json
{
  "name": "string",
  "email": "string", 
  "subject": "string (opcional)",
  "message": "string",
  "timestamp": "datetime (gerado pelo backend)"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Mensagem enviada com sucesso",
  "id": "message_id"
}
```

**Modelo MongoDB:**
```javascript
{
  _id: ObjectId,
  name: String,
  email: String,
  subject: String,
  message: String,
  timestamp: Date,
  status: String // 'new', 'read', 'replied'
}
```

### 2. Portfolio Data API (Opcional - para futuras atualizações)
**Endpoint:** `GET /api/portfolio`
**Funcionalidade:** Servir dados do portfólio (atualmente usando mock)

**Response:**
```json
{
  "personalInfo": {...},
  "experiences": [...],
  "education": [...],
  "skills": {...},
  "projects": [...],
  "achievements": [...],
  "certifications": [...]
}
```

### 3. Portfolio Analytics API (Futuro)
**Endpoint:** `POST /api/analytics/visit`
**Funcionalidade:** Registrar visitas ao portfólio

## Integração Frontend-Backend

### Arquivos a Modificar:
1. **Contact.jsx** - Integrar formulário com API real
2. **mock.js** - Manter como fallback ou substituir por API calls
3. **Criar service layer** - Para chamadas API centralizadas

### Environment Variables:
- `REACT_APP_BACKEND_URL` (já configurado)
- Backend: `MONGO_URL`, `DB_NAME`

### Implementação Backend:
1. Criar modelo Contact no MongoDB
2. Endpoint POST /api/contact com validação
3. Tratamento de erros e validação de dados
4. Possível integração com email (futuro)

## Funcionalidades Implementadas (Frontend)
✅ Design responsivo e moderno
✅ Paleta de cores azul marinho/cinza/branco  
✅ Navegação suave entre seções
✅ Formulário de contato (mock)
✅ Download de CV (link direto)
✅ Links para redes sociais
✅ Animações e microinterações
✅ Seções: Header, Hero, About, Experience, Education, Skills, Projects, Contact, Footer

## Próximos Passos:
1. ✅ Frontend completo com mock data
2. 🔄 Backend API para formulário de contato
3. 🔄 Integração frontend-backend
4. 🔄 Testes de funcionalidade
5. ⏳ Deployment e otimizações

## Notas Técnicas:
- Usando shadcn/ui components
- Toast notifications implementadas
- Validação de formulário no frontend
- Preparado para integração com backend MongoDB
- Mock data baseado em dados reais do CV fornecido