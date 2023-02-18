import React from 'react'

function CharityDetails(props) {
  // Dummy data for an NGO
  // Will change to API
  const ngo = {
    id: 1,
    name: "Lorem Ipsum Charity",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pulvinar sapien a lacinia tincidunt. Mauris rutrum quam vel purus bibendum, vel faucibus ex finibus. Sed auctor vitae orci vel euismod. Aliquam fermentum, nulla id ultricies vestibulum, sapien eros ultricies mauris, eu varius felis felis ac mi. Integer non pharetra sapien, ac pulvinar quam. Vivamus commodo, purus eu laoreet malesuada, ex nisl eleifend nibh, at lobortis ipsum nisl vel risus.",
    revenue: "$1,000,000",
    expenses: "$800,000",
    programPercentage: 60,
    administrativePercentage: 20,
    fundraisingPercentage: 20,
    mission: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pulvinar sapien a lacinia tincidunt. Mauris rutrum quam vel purus bibendum, vel faucibus ex finibus.",
    impact: "Nulla vel enim eget sem tristique varius. Sed dictum metus ac tellus iaculis, in commodo nibh sagittis. Cras eu mauris non magna ultricies iaculis vel vel neque. Sed ut eleifend nulla. Aliquam erat volutpat. Donec ac pharetra lorem, ac eleifend turpis. Fusce eu eros augue. Maecenas pellentesque nibh eget magna gravida vestibulum. Praesent fringilla nisl a dui eleifend consequat.",
    address: "123 Main St, Anytown, USA",
    phone: "555-555-1234",
    email: "info@loremipsumcharity.org",
    website: "www.loremipsumcharity.org"
  };

  return (
    <div>
      <h1>{ngo.name}</h1>
      <p>{ngo.description}</p>
      <div>
        <h2>Financials</h2>
        <p>Revenue: {ngo.revenue}</p>
        <p>Expenses: {ngo.expenses}</p>
        <p>Program Percentage: {ngo.programPercentage}%</p>
        <p>Administrative Percentage: {ngo.administrativePercentage}%</p>
        <p>Fundraising Percentage: {ngo.fundraisingPercentage}%</p>
      </div>
      <div>
        <h2>Mission and Impact</h2>
        <p>{ngo.mission}</p>
        <p>{ngo.impact}</p>
      </div>
      <div>
        <h2>Contact Information</h2>
        <p>Address: {ngo.address}</p>
        <p>Phone: {ngo.phone}</p>
        <p>Email: {ngo.email}</p>
        <p>Website: {ngo.website}</p>
      </div>
    </div>
  );
}

export default CharityDetails;
