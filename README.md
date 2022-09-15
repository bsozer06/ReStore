# ReStore
Store application is developed using React and Net Core

## Backend : Net Core
### Used packages
- Microsoft.AspNetCore.Identity.EntityFrameworkCore
- Microsoft.EntityFrameworkCore.Design
- Microsoft.EntityFrameworkCore.Sqlite
- Microsoft.EntityFrameworkCore.PostgreSQL
- Npgsql.EntityFrameworkCore.PostgreSQL
- Microsoft.AspNetCore.Authentication.JwtBearer
- AutoMapper.Extensions.Microsoft.DependencyInjection
- CloudinaryDotNet
- Stripe.net
- Swashbuckle.AspNetCore

Data seeding, pagination, middleware and some services (e.g Image, Payment, Token) were developed here.

For rapid development on back-end side, a spefic business layer was not developed. Business rules and data accessing were carried out on the controllers. This situation can be improved in the future.


## Frontend : React - TypeScript
### Used Packages
- redux toolkit
- react-router-dom
- axios
- mui
- stripe
- yup
