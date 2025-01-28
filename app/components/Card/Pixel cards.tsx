import CardGrid from "./Cards";
import Card from "./Cards";
import IconWrapper from "../Helper/IconWrapper";

const PixelCards = () => (
  <CardGrid>
    <Card
      icon={
        <IconWrapper>
          <path d="M216,42H40A14,14,0,0,0,26,56V200a14,14,0,0,0,14,14H216a14,14,0,0,0,14-14V56A14,14,0,0,0,216,42ZM40,54H216a2,2,0,0,1,2,2V98H38V56A2,2,0,0,1,40,54ZM38,200V110H98v92H40A2,2,0,0,1,38,200Zm178,2H110V110H218v90A2,2,0,0,1,216,202Z"/>
        </IconWrapper>
      }
      label="Layout"
      activeColor="#e3e3e3"
      pixelProps={{ colors: ['#f8fafc', '#f1f5f9', '#cbd5e1'] }}
    />
    
    {/* Other cards with similar structure */}
  </CardGrid>
);
