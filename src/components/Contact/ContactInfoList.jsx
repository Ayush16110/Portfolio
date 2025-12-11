import React from 'react'
import ContactInfoCard from "./ContactInfoCard";

export default function ContactInfoList() {
  return (
    <div className="flex flex-col gap-4">
      <ContactInfoCard 
        icon="📩"
        label="Email"
        value="newayushgupta2017@gmail.com"
      />
      <ContactInfoCard 
        icon="📞"
        label="Phone"
        value="+91 7275386768"
      />
      <ContactInfoCard 
        icon="📍"
        label="Location"
        value="Greater Noida, India"
      />
      <ContactInfoCard 
        icon="⏳"
        label="Response Time"
        value="Typically replies within 24–48 hours"
      />
    </div>
  );
}
