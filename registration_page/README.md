Three InfoSec Sins that I prevented:
1. hidden input/field (src/index.js line 66-99)
2. Cookies not using httponly and secure (server/index.js line 20-26)
3. No Validation of data type (src/index.js line 21-40)

Questions:
1. I've read about session riding and they prevent it by using a hidden input for the csrf token inside a form (https://www.neuralegion.com/blog/csrf-token/)
2. Input fields have different types like email, text, password which returns strings when the value is accessed, are these considered validation of data type when you're also expecting the data to be a string?