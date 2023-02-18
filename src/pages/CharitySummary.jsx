import React from 'react'
import CharityItem from '../components/CharityItem'
import { Grid } from '@mui/material'

const CharityList=[
  {
    id:1,
    name:'World Medical Relief',
    image:"https://gpmchurch.org/wp-content/uploads/2021/08/World-Medical-Relief-400x300.jpg",
    email:"info@worldmedicalrelief.org",
    description:"Since 1953, World Medical Relief has provided medical assistance to those in most need. In addition to monetary donations, we accept donations of medical supplies, prescriptions and various items on our wish list."
  },
  {
    id:2,
    name:'Save the Children',
    image:"https://www.healthynewbornnetwork.org/hnn-content/uploads/SC_USA_Logo_RedBlack_Stacked-003.jpg",
    email:"info@savethechildren.ca",
    description:"For over 100 years, we’ve advanced children’s rights around the world. We do whatever it takes every day and in times of crisis — to give children a healthy start in life, the opportunity to learn and protection from harm. We strive to ensure children’s unique needs are met and their voices are heard— transforming their lives and the future we share. Because we believe every girl and boy has the right to survive and thrive."
  },
  {
    id:3,
    name:'Action Against Hunger',
    image:"https://upload.wikimedia.org/wikipedia/commons/1/19/Eng_Col_RGB_-_Copy.png",
    email:" info@actionagainsthunger.org",
    description:"Action Against Hunger is a global humanitarian organization that takes decisive action against the causes and effects of hunger."
  },
  {
    id:4,
    name:'Doctor Without Borders',
    image:"https://www.msf.org/themes/custom/msf_theme/ogimage.jpg",
    email:" +1 (800) 982-7903",
    description:"Founded to save lives and speak out, Doctors Without Borders has helped tens of millions of people since 1971. The 13 founders have grown to over 36,000 staff on the frontline of emergency medical aid."
  },
]

const CharitySummary = () => {
  return (
    <Grid 
      container 
      sx={{
        display: 'flex',
        justifyContent: "space-around",
        width:"90%"
      }}
    >
      {CharityList.map((charity)=>(
        <Grid
          xs={12} sm={6}
          sx={{
            display:'flex',
            justifyContent:'center'
          }}
        >
          <CharityItem charity={charity}/>
        </Grid>
      ))}
    </Grid>
  )
}

export default CharitySummary