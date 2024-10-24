## Setting Up PostgreSQL for Prisma on macOS

### Step 1: Install PostgreSQL

Install PostgreSQL using Homebrew:

brew install postgresql

### Step 2: Set Up PostgreSQL

1. **Start the PostgreSQL Service**:
   Start the PostgreSQL service:

   brew services start postgresql

2. **Access the PostgreSQL Shell**:
   Access the PostgreSQL shell:

   psql -U postgres

3. **If You Encounter Access Issues**:

   If you're not able to access PostgreSQL using the `postgres` role, follow these steps:

   1. **Log in Using the Default User**:
      Try logging in with your macOS username and specifying a different database that exists, such as `template1`, which is a default database in PostgreSQL:

      psql -d template1 -U $(whoami)

   2. **Create a New Superuser Role**:
      Once you are inside `psql`, you can create a new superuser role. Let's call it `postgres`:

      CREATE ROLE postgres WITH SUPERUSER CREATEDB CREATEROLE LOGIN PASSWORD 'Shubhi@123';

   3. **Exit the `psql` Shell**:
      Exit the `psql` shell by typing:

      \q

   4. **Log in with the New Superuser**:
      Log in using the new `postgres` role:

      psql -U postgres

4. **Reinitialize the Database Cluster** (If Needed):

   As a last resort, if the database is fresh and there’s no critical data, you can reinitialize the PostgreSQL cluster:

   brew services stop postgresql@14
   rm -rf /usr/local/var/postgres
   initdb /usr/local/var/postgres
   brew services start postgresql@14
