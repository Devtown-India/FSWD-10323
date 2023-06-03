# Schema

1) User
    - id : String
    - firstName : String
    - lastName : String
    - email : String
    - password : String (hash)
    - posts : [Post]
    - comments : [Comment]
    - profilePicture : String
    - phone : String  (optional)
    - isDisabled : Boolean
    - followers : [User]
    - following : [User]
    - savedPosts : [Post]
    - role : Enum[0,1,2] // 0 is normal user, 1 is moderator, 2 is admin
    - lastLogin : Date
    - createdAt : Date
    - updatedAt : Date

2) Post
    - id : String
    - title : String
    - description : String (optional)
    - image : String 
    - comments : [Comment]
    - likes : [User]
    - shareCount : Number
    - user : User
    - tags : [String]
    - createdAt : Date
    - updatedAt : Date
    - deleted : Boolean

3) Comment
    - id : String
    - commentText : String
    - user : User
    - likes : [User]
    - createdAt : Date
    - updatedAt : Date
    - deleted : Boolean
    - isEdited : Boolean (Toggle true if updated by user)

# API's

- Auth
    - Login (Public)
    - Signup (Public)
    - Privilege (Admin)
    - Logout (Public)
    - Reset Password (Public) (IMPORTANT)
- User
    - Get all posts (Public)
    - Post a comment (Public)
    - Like a comment (Public)
    - Update own comment (Public)
    - Delete own comment (Public)
    - Delete own comment (Public)
    - Delete any comment (Moderators/Admin)
- Admin 
    - Create Moderators (Admin)
    - Delete Moderators (Admin)
    - Change Privileges (Admin)
    - Disable a user (Admin)
    - Get all users (Admin)
    - Get all comments (Admin)
