import React, { useState, useEffect } from "react";

const Countdown = () => {
    const [timeLeft, setTimeLeft] = useState({});
    
    useEffect(() => {
      // Set the date we're counting down to
      const countDownDate = new Date("August 5, 2024 12:00:00").getTime();
      
      // Update the count down every 1 second
      const x = setInterval(() => {
        // Get today's date and time
        const now = new Date().getTime();
        
        // Find the distance between now and the count down date
        const distance = countDownDate - now;
        
        // Time calculations for days, hours, minutes, and seconds
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        // Display the result in the element with id="demo"
        setTimeLeft({ days, hours, minutes, seconds });
        
        // If the count down is finished, write some text 
        if (distance < 0) {
          clearInterval(x);
          setTimeLeft({});
        }
      }, 1000);
      
      return () => clearInterval(x);
    }, []);
    
    return (
      <div
        id="demo"
        style={{
          backgroundImage: 'linear-gradient(to bottom, #b8b0af 0%, #f2ecea 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          position: 'relative',
          fontSize: '1.2em',
          fontFamily: "'Poppins', sans-serif",
          fontWeight: 900,
          textAlign: 'center'
        }}
      >
        {timeLeft.days !== undefined 
          ? `${timeLeft.days}D ${timeLeft.hours}H ${timeLeft.minutes}M ${timeLeft.seconds}S` 
          : 'EXPIRED'}
      </div>
    );
  

}
export default Countdown;