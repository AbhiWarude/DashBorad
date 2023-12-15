import React from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBSelect
}
from 'mdb-react-ui-kit';

function App() {
  return (
    <MDBContainer fluid>

      <MDBRow className='justify-content-center align-items-center m-5'>

        <MDBCard>
          <MDBCardBody className='px-4'>

            <h6 className="fw-bold mb-4 pb-2 pb-md-0 mb-md-5">Create Text & Media</h6>

            <MDBRow>

              <MDBCol md='3'>
			   <h6 class="fw-bold mb-0 me-4">Heading 01 </h6>
                <MDBInput wrapperClass='mb-4' label='First Name' size='lg' id='form1' type='text'/>
              </MDBCol>

              <MDBCol md='3'>
			   <h6 class="fw-bold mb-0 me-4">Heading 02 </h6>
                <MDBInput wrapperClass='mb-4' label='Last Name' size='lg' id='form2' type='text'/>
              </MDBCol>
			  <MDBCol md='6'>
			   <h6 class="fw-bold mb-0 me-4">Description 01</h6>
                <MDBInput wrapperClass='mb-4' label='Description' size='lg' id='form3' type='text'/>
              </MDBCol>


            </MDBRow>

            <MDBRow>

              <MDBCol md='4'>
                 <h6 class="fw-bold mb-0 me-4">Landscape Marketing Image (1:91)</h6>
                <MDBInput wrapperClass='mb-4' label='Description' size='lg' id='form3' type='text'/>
              </MDBCol>
			  
			   <MDBCol md='4'>
                 <h6 class="fw-bold mb-0 me-4">Portrait Marketing image (4:5)</h6>
                <MDBInput wrapperClass='mb-4' label='Description' size='lg' id='form3' type='text'/>
              </MDBCol>
               
			    <MDBCol md='4'>
                 <h6 class="fw-bold mb-0 me-4">Square Marketing Image(1:1)</h6>
                <MDBInput wrapperClass='mb-4' label='Description' size='lg' id='form3' type='text'/>
              </MDBCol>
            </MDBRow>

            <MDBRow>

              <MDBCol md='12'>
			   <h6 class="fw-bold mb-0 me-4">Video URL</h6>
                <MDBInput wrapperClass='mb-4' label='Email' size='lg' id='form4' type='email'/>
              </MDBCol>

            </MDBRow>
			<MDBRow>

              <MDBCol md='6'>
			   <h6 class="fw-bold mb-0 me-4">Business Name</h6>
                <MDBInput wrapperClass='mb-4' label='Email' size='lg' id='form4' type='email'/>
              </MDBCol>
			  
			  <MDBCol md='6'>
			   <h6 class="fw-bold mb-0 me-4">Button Label</h6>
			   <MDBSelect
              label='Choose option'
              className='mb-4'
              size='lg'
              data={[
                { text: 'Choose option', value: 1, disabled: true },
                { text: 'Subject 1', value: 2 },
                { text: 'Subject 2', value: 3 },
                { text: 'Subject 3', value: 4 }
              ]}
              />
              </MDBCol>

            </MDBRow>
			<MDBRow>

              <MDBCol md='12'>
			   <h6 class="fw-bold mb-0 me-4">Website URL</h6>
                <MDBInput wrapperClass='mb-4' label='Email' size='lg' id='form4' type='email'/>
              </MDBCol>

            </MDBRow>

			 <MDBBtn className='mb-4' size='lg'>Next</MDBBtn>
            <MDBBtn className='mb-4' size='lg'>Submit</MDBBtn>

          </MDBCardBody>
        </MDBCard>

      </MDBRow>
    </MDBContainer>
  );
}

export default App;