import React, { Component } from 'react'
import Form from "@rjsf/core";
export default class Add extends Component {

   scheme =   {
        "title": "A registration form",
        "description": "A simple form example.",
        "type": "object",
        "required": [
          "firstName",
          "lastName"
        ],
        "properties": {
          "firstName": {
            "type": "string",
            "title": "First name",
            "default": "Chuck"
          },
          "lastName": {
            "type": "string",
            "title": "Last name"
          },
          "age": {
            "type": "integer",
            "title": "Age"
          },
          "bio": {
            "type": "string",
            "title": "Bio"
          },
          "password": {
            "type": "string",
            "title": "Password",
            "minLength": 3
          },
          "telephone": {
            "type": "string",
            "title": "Telephone",
            "minLength": 10
          }
        }
      }

    render() {
        return (
            <div>

            testst
            <Form schema={this.scheme}
        onChange={(e)=> console.log()}
        onSubmit={(e)=>console.log(e.formData)}
        onError={console.log("errors")} />
            </div>
        )
    }
}
