import React from 'react'

const FAQ = () => {
    return (
        <div className='container mt-200'>
            <div className='row' style={{ marginBottom: '20px', display: 'flex', textAlign: 'center', justifyContent: 'center', flexDirection: 'column' }}>



                <h2>FAQ</h2>
                <p>For more information, check out our<a href='/Login'>Help Center.</a></p>

            </div>
            <div>
                <div class="accordion" id="accordionPanelsStayOpenExample">
                    <div class="accordion-item" style={{ margin: '10px', borderRadius: '10px' }}>
                        <h2 class="accordion-header" id="panelsStayOpen-headingOne">
                            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                                Is Afforai free?
                            </button>
                        </h2>
                        <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                            <div class="accordion-body">
                                Yes, Afforai is free for all new users. Upon signing up, users are given 50 permanent credits
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item" style={{ margin: '10px', borderRadius: '10px' }}>
                        <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                                What are subscription credits versus permanent credits?
                            </button>
                        </h2>
                        <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
                            <div class="accordion-body">
                                Subscription credits come from monthly payments, while permanent credits come from top ups. Subscription credits will be used before permanent credits, and subscription credits expire every month while permanent credits stay.
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item" style={{ margin: '10px', borderRadius: '10px' }}>
                        <h2 class="accordion-header" id="panelsStayOpen-headingThree">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                                Does Afforai support documents storing on the cloud like Google Drive, One Drive, or Drop Box?
                            </button>
                        </h2>
                        <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
                            <div class="accordion-body">
                                Currently Afforai only support uploading local documents and websites, in the near future we will integrate these cloud solutions. Sign up with us to get updated.
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item" style={{ margin: '10px', borderRadius: '10px' }}>
                        <h2 class="accordion-header" id="panelsStayOpen-headingOne">
                            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                                Does Afforai support uploading images and video?
                            </button>
                        </h2>
                        <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                            <div class="accordion-body">
                                Currently Afforai supports OCR for scanned PDF, but not via image file directly. Afforai currently working on working with video and audio transcript.
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item" style={{ margin: '10px', borderRadius: '10px' }}>
                        <h2 class="accordion-header" id="panelsStayOpen-headingOne">
                            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                                Does Afforai support collaboration between accounts?
                            </button>
                        </h2>
                        <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                            <div class="accordion-body">
                                Currently Afforai is working on a solution to allow users to share chatbots and files. Sign up with us to get updated when this feature roll out.
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item" style={{ margin: '10px', borderRadius: '10px' }}>
                        <h2 class="accordion-header" id="panelsStayOpen-headingOne">
                            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                                Is my data secured?
                            </button>
                        </h2>
                        <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                            <div class="accordion-body">
                                Yes your data is secured with Afforai. We don't store your conversation with the AI, and the files you uploaded on the system is stored on the cloud using Microsoft Azure and MongoDB with their standard security. LLM calls are made using OpenAI Azure with their security measures.
                            </div>
                        </div>
                    </div>


                </div>
            </div>

        </div>
    )
}

export default FAQ