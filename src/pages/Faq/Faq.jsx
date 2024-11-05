import React from 'react'

const Faq = () => {
    return (
        <>

            <section className=' container mx-auto  mt-4 px-4 xl:px-0'>

                <div className='bg-primary rounded-lg md:px-4 lg:px-0'>

                    <div className='max-w-5xl mx-auto md:flex md:items-center md:gap-2'>
                        <div className='text-white md:w-8/12 px-2 py-2'>
                            <h2 className='text-3xl md:text-5xl lg:text-7xl font-bold'>FAQs</h2>
                            <p className='md:w-7/12 mt-2 text-opacity-70 text-gray-300'>Have question? Here you will find the answer most valued by our partners, along with access to step-by-step instructions and support</p>
                        </div>
                        <div className='md:w-4/12'>
                            <img src="https://i.imgur.com/kaAFJ9L.png" alt="faq img" />
                        </div>
                    </div>

                </div>
                <div className='faq_question_and_answer mt-12 max-w-4xl mx-auto'>
                    <div className="join join-vertical w-full">
                        <div className="collapse collapse-arrow join-item border-base-300 border">
                            <input type="radio" name="my-accordion-4" defaultChecked />
                            <div className="collapse-title text-lg md:text-xl font-medium">What payment methods do you accept?</div>
                            <div className="collapse-content">
                                <p className='text-xs md:text-sm lg:text-lg'><strong>Answer:</strong> We accept a wide range of payment methods to ensure your convenience and security. You can pay using major credit cards (Visa, MasterCard, American Express), debit cards, PayPal, and other secure payment gateways. We also offer options for Apple Pay and Google Pay on supported devices. All transactions are protected with the latest encryption technology.</p>
                            </div>
                        </div>
                        <div className="collapse collapse-arrow join-item border-base-300 border">
                            <input type="radio" name="my-accordion-4" />
                            <div className="collapse-title text-lg md:text-xl font-medium">How long does shipping take?</div>
                            <div className="collapse-content">
                                <p className='text-xs md:text-sm lg:text-lg'><strong>Answer:</strong> Shipping times vary depending on your location and the shipping option you select at checkout. Standard shipping typically takes between 3-7 business days, while expedited shipping can arrive within 1-3 business days. You will receive a tracking number once your order is shipped so you can follow its journey.</p>
                            </div>
                        </div>

                        <div className="collapse collapse-arrow join-item border-base-300 border">
                            <input type="radio" name="my-accordion-4" />
                            <div className="collapse-title text-lg md:text-xl font-medium">Can I track my order?</div>
                            <div className="collapse-content">
                                <p className='text-xs md:text-sm lg:text-lg'><strong>Answer:</strong> Yes, absolutely! Once your order is shipped, we'll send you a confirmation email with a tracking number. You can use this tracking number to check the status of your delivery on our website or through the shipping carrier's website.</p>
                            </div>
                        </div>
                        <div className="collapse collapse-arrow join-item border-base-300 border">
                            <input type="radio" name="my-accordion-4" />
                            <div className="collapse-title text-lg md:text-xl font-medium">What is your return policy?</div>
                            <div className="collapse-content">
                                <p className='text-xs md:text-sm lg:text-lg'><strong>Answer:</strong> We offer a hassle-free return policy! If you're not satisfied with your purchase, you have 30 days from the delivery date to return it for a full refund or exchange. Items must be unused, in their original packaging, and accompanied by a receipt or proof of purchase. For more details, please refer to our Return Policy page.</p>
                            </div>
                        </div>
                        <div className="collapse collapse-arrow join-item border-base-300 border">
                            <input type="radio" name="my-accordion-4" />
                            <div className="collapse-title text-lg md:text-xl font-medium">Do you ship internationally?</div>
                            <div className="collapse-content">
                                <p className='text-xs md:text-sm lg:text-lg'><strong>Answer:</strong> Yes, we do offer international shipping to many countries! Shipping rates and delivery times vary based on location. Any customs fees, import taxes, or duties are the responsibility of the buyer. You can view available shipping options and rates at checkout or contact our support team for more information.</p>
                            </div>
                        </div>
                        <div className="collapse collapse-arrow join-item border-base-300 border">
                            <input type="radio" name="my-accordion-4" />
                            <div className="collapse-title text-lg md:text-xl font-medium">What should I do if my order arrives damaged or is incorrect?</div>
                            <div className="collapse-content">
                                <p className='text-xs md:text-sm lg:text-lg'><strong>Answer:</strong> We're here to help! If your order arrives damaged or if you receive the wrong item, please contact our customer service team within 48 hours of delivery. We'll arrange a replacement or refund as quickly as possible. Please have your order number and photos of the issue ready to assist with processing.</p>
                            </div>
                        </div>
                        <div className="collapse collapse-arrow join-item border-base-300 border">
                            <input type="radio" name="my-accordion-4" />
                            <div className="collapse-title text-lg md:text-xl font-medium">Do you offer discounts or promotions?</div>
                            <div className="collapse-content">
                                <p className='text-xs md:text-sm lg:text-lg'><strong>Answer:</strong> Yes, we frequently offer special promotions, discounts, and seasonal sales. To stay updated on our latest offers, sign up for our newsletter or follow us on social media. Additionally, first-time customers may receive a discount code upon signing up!</p>
                            </div>
                        </div>

                    </div>
                </div>

            </section>


        </>
    )
}

export default Faq
