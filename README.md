# Percentage-api
<p>
	Api Created in node for percentage values obtained through an object/JSON, considering the elements as fragments of a whole. It is understood that the whole refers to the sum of the fragments.
</p>

Here are the technologies used in this project.
 

* axios v1.2.2,
* express v4.18.2
* Node/JavaScript


Under development
* eslint v8.31.0
* gulp v4.0.2
* NodeJs v16.18.1
* npm v8.19.2



 
 
## Services Used
 
* Github
* Vercel
 
<!-- ## Ruby Gems
... -->
 
## Getting started
 
* To Download:

Use a tool of your choice, paste(or click in link) <code>https://github.com/ysh-rael/percentage-api/archive/refs/heads/main.zip</code> into your browser's search engine. I will be using 'wget' as a suggested download tool.

>	Ubuntu, Debian, Mint, others:<br>
	  ```
sudo apt-get install wget
	  ```

>	Fedora, CentOS:<br>
	```
dnf install wget
	```<br>
	```
yum install wget
	```

>	openSUSE:<br>
	```
zypper install wget
	```

>	after installing:<br>
	```
wget https://github.com/ysh-rael/percentage-api/archive/refs/heads/main.zip
	```
* Or clone this repository:

> URL<br>
	```
git clone https://github.com/ysh-rael/percentage-api.git
	```


## How to use
 The API has two routes <code>/transformbyobj</code> and <code>/transformbyurl</code> which can be called via a POST request.
....<br>
> **/transformbyobj**<br>
Receive an object in JSON via the request body. It keeps the keys inside the object just by changing the value to the corresponding percentage.
![print_percentage-api-obj](https://user-images.githubusercontent.com/79410863/212818106-a223f1ec-8774-4399-a99a-54d94a44c082.png)


> **/transformbyurl**<br>
> Receives an object or JSON via the body of the POST request containing:
<code>{ "url": "https://*.com/"} </code>
returning the value of the GET request made to the requested URL. A JSON is expected as a response.<br>
> *You must contain a key called "url" in the request body.*
![print_percentage-api-url](https://user-images.githubusercontent.com/79410863/212818196-9558789c-8286-44ba-be52-3fcf8b9f5351.png)


	

## Features
 
## Next features
 
## Links
 
  - Link of deployed API: https://percentage-api.vercel.app
  - Repository: https://github.com/ysh-rael/percentage-api/
 
 
## Versioning
 
![Version](https://img.shields.io/github/package-json/v/ysh-rael/percentage-api/main?color=yellow&style=for-the-badge)
 
## License

![License](https://img.shields.io/github/license/ysh-rael/percentage-api?style=for-the-badge)
 
## Contributors
![contributors](https://img.shields.io/github/contributors/ysh-rael/percentage-api?style=for-the-badge)
 
* **Yshrael Pimentel**: [Ysh-rael](https://github.com/ysh-rael)
 
 
Please follow github and join us!
Thanks to visiting me and good coding!








