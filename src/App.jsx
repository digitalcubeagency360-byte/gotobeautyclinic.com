import React from 'react';

export default function App() {
  return (
    <div className='container py-5'>
      <header className='mb-4'>
        <h1 className='display-6'>GoTo Beauty Clinic</h1>
        <p className='text-muted'>Bootstrap setup — clean start</p>
      </header>

      <div className='row g-4'>
        <div className='col-md-6'>
          <div className='card shadow-sm'>
            <div className='card-body'>
              <h5 className='card-title'>Book an appointment</h5>
              <p className='card-text'>Use Bootstrap utilities for layout and spacing.</p>
              <button className='btn btn-primary'>Book Now</button>
            </div>
          </div>
        </div>

        <div className='col-md-6'>
          <div className='card shadow-sm'>
            <div className='card-body'>
              <h5 className='card-title'>Contact</h5>
              <p className='card-text'>Phone: +62 812 3456 7890</p>
              <button className='btn btn-outline-secondary'>Contact Us</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
