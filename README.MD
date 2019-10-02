# Aircnc - API
Aircnc-api is a RocketSeat’s back-end project nineth OmniStack week in 2018.
It is being used as a study project to improve my skils.

### Features:
  - Creeate user;
  - Create spot;
  - Create bookings;
  - Show spots by technology;
  - Show spots by user (when is compoany);

### Routes:
| Method | Action          | Header                               | Body      | Query     | Path                |
| ------ | ------          | ------                               | ------    | ------    | ------              |
| POST   | login           | [ ]                                  | [B1](#b1) | -         | /sessions           |
| POST   | create-spot     | [ "user_id" ]                        | [B2](#b2) | -         | /spots              |
| POST   | create-booking  | [ "user_id" ]                        | [B3](#b3) | -         | /spots/:id/bookings |
| GET    | get-spots-user  | [ "user_id" ]                        | -         | -         | /dashboard          |
| GET    | get-spots-techs | [ ]                                  | -         | [Q1](#q1) | /spots              |

###### B1
> Request body for `login`
```json
{
    "email": "turing@mail.com",
}
```

###### B2
> Request body for `create-token` (this request is a multipart)
```json
{
    "thumbnail": file,
    "price": "string",
    "techs": "string",
    "company": "string"
}
```

###### B3
> Request body for `create-booking`
```json
{
    "date": "string"
}
```

###### Q1
> Request query for `get-spots-techs`
```json
{
    "tech": "string"
}
```