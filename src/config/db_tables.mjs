const UsersTable = `
    CREATE TABLE IF NOT EXISTS users (
        id SERIAL,
        username VARCHAR(20) UNIQUE NOT NULL,
        password VARCHAR(32) NOT NULL,
        email VARCHAR(50) UNIQUE NOT NULL,
        PRIMARY KEY(id)
    )
`

const PostsTable = `
    CREATE TABLE IF NOT EXISTS Posts (
        id SERIAL,
        author INT,
        title VARCHAR(120) NOT NULL,
        slug VARCHAR(200) NOT NULL UNIQUE,
        description VARCHAR(200) NOT NULL,
        cover_photo VARCHAR(80) NOT NULL,
        content TEXT NOT NULL,
        PRIMARY KEY(id),
        CONSTRAINT fk_author_id FOREIGN KEY(author) REFERENCES users(id)
    )
`

const DB_TABLES = [UsersTable, PostsTable]

export default DB_TABLES