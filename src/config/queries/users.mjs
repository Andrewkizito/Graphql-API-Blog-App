const CREATE_USER = `
INSERT INTO users
(username, email, password)
VALUES
($1, $2, $3)
`

export { CREATE_USER }