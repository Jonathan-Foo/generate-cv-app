import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*, :before, :after {
  padding: 0;
  margin: 0;
}

body {
  box-sizing: border-box;
  font-family: "Radio Canada", sans-serif;
  font-size: 25px;
}

.header {
  background: #222;
  color: white;
  padding: 1em;
  text-align: center;
}
.header p {
  font-weight: bold;
  font-size: 2.2em;
}

.main-content {
  padding: 2em 6.5em;
  display: grid;
  gap: 2em;
  grid-template-columns: repeat(auto-fit, minmax(700px, 1fr));
  justify-items: center;
  background: hsl(0deg, 0%, 90%);
}

.left-display {
  position: -webkit-sticky;
  position: sticky;
  top: 10px;
  background: #fff;
  box-shadow: 0 0 10px 0 #999;
  width: 750px;
  font-size: 0.8em;
  height: 1000px;
}

.display-header {
  background: rgb(114, 20, 20);
  position: relative;
  color: #fff;
  padding: 1em;
  height: 95px;
}
.display-header .name {
  position: absolute;
  font-weight: bold;
  font-size: 2.5em;
}
.display-header .title {
  position: absolute;
  font-weight: lighter;
  font-size: 1.1em;
  top: 83px;
}

.content {
  display: flex;
  height: calc(100% - 135px);
}
.content img {
  width: 100%;
}

.display-left {
  padding: 1em;
  width: 525px;
}

.display-right {
  width: 225px;
  padding: 1em;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: hsl(0deg, 0%, 95%);
}
.display-right img {
  width: 200px;
  margin-bottom: 0.5em;
}
.display-right div {
  display: flex;
  flex-direction: column;
  gap: 0.4em;
  width: 100%;
}
.display-right div .line {
  margin-block: -0.1em;
}

.section-title {
  color: rgb(114, 20, 20);
}

.info-subtext,
.info-style1 {
  font-weight: lighter;
}

.info-subtext {
  font-size: 0.9em;
}

.info-style2 {
  display: flex;
  word-wrap: break-word;
  gap: 2.5em;
  margin-bottom: .5em;
}
.info-style2 .detail {
  width: 250px;
}

.line {
  background: hsl(0deg, 0%, 80%);
  width: 100%;
  height: 1px;
  margin-block: 5px;
}

.description {
  margin-bottom: 1em;
  width: 470px;
  word-wrap: break-word;
}
.description .info-style1 {
  font-style: italic;
}

.detail {
  display: flex;
  flex-direction: column;
  gap: 0.2em;
}

.right-form {
  font-size: 0.8em;
  background-color: hsl(0deg, 0%, 90%);
  box-shadow: 0 0 10px 0 hsl(0deg, 0%, 50%);
  color: hsl(0deg, 0%, 15%);
  padding: 1em;
  border-radius: 5px;
  width: 700px;
}
.right-form .form-title {
  font-weight: bold;
  font-size: 1.1em;
}
.right-form form {
  display: flex;
  flex-direction: column;
  gap: 0.5em;
}
.right-form input[type=text], .right-form input[type=number], .right-form input[type=email], .right-form textarea {
  -webkit-appearance: none;
     -moz-appearance: none;
          appearance: none;
  background: white;
  border: none;
  border-radius: 2px;
  padding-block: 0.1em;
  font-family: inherit;
  font-size: inherit;
  padding: 0.2em;
  font-weight: lighter;
}
.right-form input[type=text]:focus, .right-form input[type=number]:focus, .right-form input[type=email]:focus, .right-form textarea:focus {
  outline: 1px solid #777;
}
.right-form input[type=file] {
  display: none;
}
.right-form .file-display {
  position: relative;
  width: 100%;
  height: 2em;
  background: #fff;
  border-radius: 2px;
  cursor: pointer;
  border: 1px dashed #777;
  transition: 50ms ease-in-out;
}
.right-form .file-display::before {
  content: "UPLOAD";
  color: inherit;
  position: absolute;
  left: 300px;
  top: 7px;
}
.right-form .file-display:hover {
  background-color: hsl(0deg, 0%, 20%);
}
.right-form .file-display:hover::before {
  color: white;
}
.right-form textarea {
  resize: none;
  height: 4em;
}

.form-info {
  display: flex;
  flex-direction: column;
}
.form-info p {
  margin-bottom: 0.5em;
}
.form-info div {
  display: flex;
  flex-direction: column;
  gap: 0.5em;
  margin-bottom: 0.5em;
}
.form-info div .delete-div {
  font-size: inherit;
  -webkit-appearance: none;
     -moz-appearance: none;
          appearance: none;
  border: none;
  background-color: rgb(179, 33, 30);
  padding: 0.5em;
  color: white;
  border-radius: 2px;
}
.form-info div .delete-div:hover {
  background-color: rgb(128, 24, 22);
}
.form-info .add-div {
  font-size: inherit;
  -webkit-appearance: none;
     -moz-appearance: none;
          appearance: none;
  border: none;
  background-color: rgb(20, 62, 114);
  padding: 0.5em;
  color: white;
  border-radius: 2px;
}
.form-info .add-div:hover {
  background-color: rgb(10, 33, 61);
}

.complete-options {
  margin-top: 1em;
  display: flex;
  flex-direction: column;
  gap: 0.5em;
}
.complete-options .create-pdf {
  font-size: inherit;
  -webkit-appearance: none;
     -moz-appearance: none;
          appearance: none;
  border: none;
  background-color: rgb(27, 161, 72);
  padding: 0.5em;
  color: white;
  border-radius: 2px;
}
.complete-options .create-pdf:hover {
  background-color: rgb(18, 112, 49);
}
.complete-options .example {
  font-size: inherit;
  -webkit-appearance: none;
     -moz-appearance: none;
          appearance: none;
  border: none;
  background-color: rgb(231, 69, 28);
  padding: 0.5em;
  color: white;
  border-radius: 2px;
}
.complete-options .example:hover {
  background-color: rgb(177, 52, 21);
}
.complete-options .clear {
  font-size: inherit;
  -webkit-appearance: none;
     -moz-appearance: none;
          appearance: none;
  border: none;
  background-color: rgb(179, 33, 30);
  padding: 0.5em;
  color: white;
  border-radius: 2px;
}
.complete-options .clear:hover {
  background-color: rgb(128, 24, 22);
}

.footer {
  background: #222;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5em;
  font-size: 0.8em;
  gap: 0.3em;
}
.footer a {
  color: #fff;
}

@media print {
  @page {
    size: 750px 1002px;
    margin-top: -10px;
  } 
}

@media (max-width: 1800px) {
  .left-display { 
    position: relative
  }
}

`

export default GlobalStyle;