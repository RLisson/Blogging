import express from 'express';
import fs from 'fs';
import path from 'path';

const app = express();
const PORT = 3000;
const DATA_FILE = 'data/posts.json';

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
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
    const posts = loadPosts();
    res.render('index.ejs', { posts: posts });
});

app.post('/posts', (req, res) => {
    const { title, image, description, content } = req.body;
    const newPost = addPost(title, image, description, content);
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

app.get('/add-test-post', (req, res) => {
    const newPost = addPost(
        'Post de Teste',
        'https://picsum.photos/400/300?random=' + Math.floor(Math.random() * 1000),
        'Este é um post de teste criado dinamicamente.',
        'Conteúdo completo do post de teste. Você pode adicionar qualquer conteúdo aqui!'
    );
    res.json({ 
        success: true, 
        message: 'Post criado com sucesso!', 
        post: newPost,
        totalPosts: loadPosts().length
    });
});

function initializeData() {
    const posts = loadPosts();
    if (posts.length === 0) {
        console.log('Nenhum post encontrado. Criando posts de exemplo...');
        addPost(
            'Meu Primeiro Post',
            'https://picsum.photos/400/300?random=1',
            'Este é meu primeiro post no blog. Aqui você encontrará conteúdo interessante sobre tecnologia e programação.',
            'Conteúdo completo do primeiro post...'
        );
        addPost(
            'Aprendendo JavaScript',
            'https://picsum.photos/400/300?random=2',
            'Dicas e truques para dominar JavaScript moderno.',
            'JavaScript é uma linguagem incrível para desenvolvimento web...'
        );
        addPost(
            'CSS Grid vs Flexbox',
            'https://picsum.photos/400/300?random=3',
            'Comparando as duas principais técnicas de layout em CSS.',
            'Ambas são ferramentas poderosas, mas cada uma tem seu lugar...'
        );
        console.log('Posts de exemplo criados!');
    }
}



// Inicializar dados e iniciar servidor
initializeData();

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    console.log(`Posts carregados: ${loadPosts().length}`);
});