import React from 'react';
import { Breadcrumb, BreadcrumbItem, Button, Form, FormGroup, Label, Input, Col, FormFeedback } from 'reactstrap';
import { Link } from 'react-router-dom'

function Contact(props) {

    const [contactState, setContactState] = React.useState({
        firstname: "",
        lastname: "",
        telnum: "",
        email: '',
        agree: false,
        contactType: "Tel.",
        message: "",
        touched: {
            firstname: false,
            lastname: false,
            telnum: false,
            email: false
        }
    })

   function handleInputChange(event) {
    const target = event.target
    const value = target.type === 'checkbox' ? target.checked : target.value
    //this ternary retrieves the checkbox state, if its a check box, or the value if not
    const name = target.name

    setContactState({
        ...contactState,
        [name]: value
        })

    }

    function handleSubmit(event) {
        console.log(JSON.stringify(contactState))
        alert(JSON.stringify(contactState))
        event.preventDefault()
    }


    const handleBlur = (field) => (event) => {
        setContactState({
            ...contactState,
            touched: {...contactState.touched, [field]: true}
        })
    }   


    const validate = (firstname, lastname, telnum, email) => {
        const errors = {
            firstname: "",
            lastname: "",
            telnum: "",
            email: ""
        }

        if (contactState.touched.firstname && firstname.length < 3) {
            errors.firstname = "First name must be at least 3 characters"

        } else if (contactState.touched.firstname && firstname.length > 10) {
            errors.firstname = "First name must be 10 characters or less"
        }

        if (contactState.touched.lastname && lastname.length < 3) {
            errors.lastname = "Last name must be at least 3 characters"

        } else if (contactState.touched.lastname && lastname.length > 10) {
            errors.lastname = "Last name must be 10 characters or less"
        }

        const reg = /^\d+$/;
        if (contactState.touched.telnum && !reg.test(telnum)) {
            errors.telnum = "Tel. number should contain only numbers"
        }

        if (contactState.touched.email && email.split("").filter(x => x === "@").length !== 1) {
            errors.email = "Email should contain a @"
        }

        return errors
    }

       
    const errors = validate(contactState.firstname, contactState.lastname, contactState.telnum, contactState.email)
 
    return(
        
        <div className="container">
            <div className="row">
               <Breadcrumb>   
                  <BreadcrumbItem>
                     <Link to='/home'>Home</Link>
                  </BreadcrumbItem>
                  <BreadcrumbItem active>Contact Us</BreadcrumbItem>            
               </Breadcrumb>
               <div className="col-12">
                  <h3>Contact Us</h3>
                  <hr />
               </div>
             </div>
            <div className="row row-content">
                <div className="col-12">
                <h3>Location Information</h3>
                </div>
                <div className="col-12 col-sm-4 offset-sm-1">
                        <h5>Our Address</h5>
                        <address>
                        121, Clear Water Bay Road<br />
                        Clear Water Bay, Kowloon<br />
                        HONG KONG<br />
                        <i className="fa fa-phone"></i>: +852 1234 5678<br />
                        <i className="fa fa-fax"></i>: +852 8765 4321<br />
                        <i className="fa fa-envelope"></i>: <a href="mailto:confusion@food.net">confusion@food.net</a>
                        </address>
                </div>
                <div className="col-12 col-sm-6 offset-sm-1">
                    <h5>Map of our Location</h5>
                </div>
                <div className="col-12 col-sm-11 offset-sm-1">
                    <div className="btn-group" role="group">
                        <a role="button" className="btn btn-primary" href="tel:+85212345678"><i className="fa fa-phone"></i> Call</a>
                        <a role="button" className="btn btn-info" href="/"><i className="fa fa-skype"></i> Skype</a>
                        <a role="button" className="btn btn-success" href="mailto:confusion@food.net"><i className="fa fa-envelope-o"></i> Email</a>
                    </div>
                </div>
            </div>
            <div className="row row-content">
                <div className='col-12'>
                    <h3>Send us your Feedback</h3>
                </div>
                <div className="col-12 col-md-9">
                    <Form onSubmit={handleSubmit}>
                        <FormGroup row>
                            <Label htmlFor="firstname" md={2}>First Name</Label>
                            <Col md={10}>
                                <Input type="text" id="firstname" name="firstname" placeholder='First Name' value={contactState.firstname} onChange={handleInputChange} onBlur={handleBlur('firstname')}
                                valid={errors.firstname === ''}
                                invalid={errors.firstname !== ''}></Input>
                                <FormFeedback>
                                    {errors.firstname}
                                </FormFeedback>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label htmlFor="lastname" md={2}>Last Name</Label>
                            <Col md={10}>
                                <Input type="text" id="lastname" name="lastname" placeholder='Last Name' value={contactState.lastname} onChange={handleInputChange}
                                onBlur={handleBlur('lastname')}
                                valid={errors.lastname === ''}
                                invalid={errors.lastname !== ''}
                                ></Input>
                                <FormFeedback>
                                    {errors.lastname}
                                </FormFeedback>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label htmlFor="telnum" md={2}>Telephone Number</Label>
                            <Col md={10}>
                                <Input type="tel" id="telnum" name="telnum" placeholder='Telephone Number' value={contactState.telnum} onChange={handleInputChange}
                                onBlur={handleBlur('telnum')}
                                valid={errors.telnum === ''}
                                invalid={errors.telnum !== ''}></Input>
                                <FormFeedback>
                                    {errors.telnum}
                                </FormFeedback> 

                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label htmlFor="email" md={2}>Email Address</Label>
                            <Col md={10}>
                                <Input type="email" id="email" name="email" placeholder='Email Address' value={contactState.email} onChange={handleInputChange}
                                onBlur={handleBlur('email')}
                                valid={errors.email === ''}
                                invalid={errors.email !== ''}></Input>
                                <FormFeedback>
                                    {errors.email}
                                </FormFeedback>

                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Col md={{size:6, offset :2}}>
                                <FormGroup check >
                                    <Label check>
                                        <Input type="checkbox" name="agree" checked={contactState.agree} onChange={handleInputChange}></Input> {' '}
                                        <strong> May we contact you </strong>
                                    </Label>
                                </FormGroup>
                            </Col>
                            <Col md={{size:3, offset :1}}>
                                <Input type="select" name="contactType" value={contactState.contactType}  onChange={handleInputChange}>
                                    <option> Tel.</option>
                                    <option>Email</option>
                                </Input>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label htmlFor="feedback" md={2}>Your Feedback</Label>
                            <Col md={10}>
                                <Input type="textarea" id="message" name="message" rows="12" value={contactState.message} onChange={handleInputChange}></Input>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Col md={{size:10, offset:2}}>
                                <Button type="submit" color='primary'>Send Feedback</Button>
                            </Col>
                        </FormGroup>
                    
                    </Form>
                </div>
            </div>
        </div>
    );
}

export default Contact;