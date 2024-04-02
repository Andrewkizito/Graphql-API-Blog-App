const CREATE_USER = `
INSERT INTO users
(username, email, password)
VALUES
($1, $2, $3)
`

const FIND_USER_BY_EMAIL_OR_USERNAME = `
SELECT username, password
FROM users
WHERE username = $1
OR email = $1
`

export { CREATE_USER, FIND_USER_BY_EMAIL_OR_USERNAME }