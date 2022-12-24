## Paginated API
This project returns simple paginated data of users.

### How to use:
The routes available includes:
```
GET /users[?page=x&limit=y] // to get certain data
// where page and limit are optional and are 1,10 respectively.

POST /users // to add new data
{
    name: "User X"
}
```

