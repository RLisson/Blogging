import express from 'express';
import fs from 'fs';
import path from 'path';
import multer from 'multer';

const app = express();
const PORT = 3000;
const DATA_FILE = 'data/posts.json';

const upload = multer();

function Post(title, image, description, content) {
    this.id = Date.now(); 
    this.title = title;
    this.image = image;
    this.description = description;
    this.content = content;
    this.createdAt = new Date().toISOString();
}

function ensureDataDir() {
    const dataDir = path.dirname(DATA_FILE);
    if (!fs.existsSync(dataDir)) {
        fs.mkdirSync(dataDir, { recursive: true });
    }
}

function loadPosts() {
    try {
        ensureDataDir();
        if (fs.existsSync(DATA_FILE)) {
            const data = fs.readFileSync(DATA_FILE, 'utf8');
            return JSON.parse(data);
        }
        return []; 
    } catch (error) {
        console.error('Erro ao carregar posts:', error);
        return [];
    }
}

function savePosts(posts) {
    try {
        ensureDataDir();
        fs.writeFileSync(DATA_FILE, JSON.stringify(posts, null, 2), 'utf8');
        console.log('Posts salvos com sucesso!');
        return true;
    } catch (error) {
        console.error('Erro ao salvar posts:', error);
        return false;
    }
}

function addPost(title, image, description, content) {
    const posts = loadPosts();
    const newPost = new Post(title, image, description, content);
    posts.push(newPost);
    savePosts(posts);
    return newPost;
}

function getPostById(id) {
    const posts = loadPosts();
    return posts.find(post => post.id == id);
}

function deletePost(id) {
    const posts = loadPosts();
    const filteredPosts = posts.filter(post => post.id != id);
    if (filteredPosts.length !== posts.length) {
        savePosts(filteredPosts);
        return true;
    }
    return false;
}

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true })); // Para processar formulários
app.use(express.json()); // Para processar JSON

app.get('/', (req, res) => {
    const posts = loadPosts();
    res.render('index.ejs', { posts: posts });
});

const handleFormData = (req, res, next) => {
    const contentType = req.get('Content-Type');
    console.log('Middleware - Content-Type:', contentType);
    
    if (contentType && contentType.includes('multipart/form-data')) {
        upload.none()(req, res, next);
    } else {
        next();
    }
};

app.post('/posts', handleFormData, (req, res) => {
    const { title, image, description, content } = req.body;
    
    if (!title || !image || !description || !content) {
        console.error('Dados incompletos:', { title, image, description, content });
        return res.status(400).send('Todos os campos são obrigatórios');
    }
    
    const newPost = addPost(title, image, description, content);
    console.log('Post criado:', newPost);
    res.redirect('/');
});

app.get('/posts/:id', (req, res) => {
    const post = getPostById(req.params.id);
    if (post) {
        res.render('post.ejs', { post: post });
    } else {
        res.status(404).send('Post não encontrado');
    }
});

app.delete('/posts/:id', (req, res) => {
    const deleted = deletePost(req.params.id);
    if (deleted) {
        res.json({ success: true, message: 'Post deletado com sucesso' });
    } else {
        res.status(404).json({ success: false, message: 'Post não encontrado' });
    }
});

app.get('/create', (req, res) => {
    res.render('createpost.ejs');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    console.log(`Posts carregados: ${loadPosts().length}`);
});