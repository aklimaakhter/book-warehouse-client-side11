import React from 'react';

const Blog = () => {
    return (
        <div className='container'>
            <div>
                <h4>Q.1: Difference between javascript and nodejs?</h4>
                <p>Ans:
                    1. Javascript is a programming language that is used for writing scripts on the website. But NodeJS is a Javascript runtime environment.
                    <br />
                    2.	Javascript can only be run in the browsers.And can run Javascript outside the browser with the help of NodeJS.
                    <br />
                    3. 	Javascript basically used on the client-side.But Node js mostly used on the server-side.
                    <br />
                    4.Javascript is used in frontend development and Nodejs is used in server-side development.
                    <br />
                    5.Javascript is the upgraded version of ECMA script that uses Chrome's V8 engine written in C++. But Nodejs is written in C, C++ and Javascript.
                </p>
            </div>
            <div>
                <h4>Q.2:Differences between sql and no sql databases.?</h4>
                <p> Ans:
                    1.SQL databases have fixed or static or predefined schema and No SQL Database dynamic schema.
                    <br/>
                    2.These databases are not suited for hierarchical data storage. And These databases are best suited for hierarchical data storage.
                    <br/>
                    3.It is Vertically Scalable and It's Horizontally scalable.
                    <br/>
                    4. SQL RELATIONAL DATABASE MANAGEMENT SYSTEM (RDBMS) and It's Non-relational or distributed database system.
                    <br/>
                    5.These databases are not suited for hierarchical data storage.And These databases are best suited for hierarchical data storage.
                  
                </p>
            </div>
            <div>
                <h4>Q.3:What is the purpose of jwt and how does it work?</h4>
                <p>Ans:JSON Web Token is an open standard that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. This information can be verified and trusted because it is digitally signed.that,s why it's use.JWT differ from other web tokens in that they contain a set of claims. Claims are used to transmit information between two parties and two token issues. one of the access token and other refresh token.Access token is temporary nd refresh token is long term.if refresh token is expire then user sign out.</p>
            </div>
        </div>
    );
};

export default Blog;