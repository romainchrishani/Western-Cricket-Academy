import { useEffect, useState } from "react";
import SectionHeader from "../../../Components/SectionHeader/SectionHeader";
import InstructorsCard from "./InstructorsCard";
import Container from "../../../Components/Container/Container";
import FadeInAnimation from "../../../Components/FadeInAnimation/FadeInAnimation";

const Instructors = () => {
  const [staffs, setStaffs] = useState([]);

  useEffect(() => {
    fetch("staffs.json")
      .then((res) => res.json())
      .then((data) => setStaffs(data));
  }, []);

  return (
    <div className="dark:bg-gray-800 pb-10 lg:pb-20" id="instructors">
      <Container>
        <SectionHeader heading={"Our Management and Staff"}></SectionHeader>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 md:gap-5 lg:gap-5 gap-5 ">
          {staffs.map((staff, index) => (
            <FadeInAnimation key={staff.id} custom={index}>
              <InstructorsCard staff={staff}></InstructorsCard>
            </FadeInAnimation>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Instructors;
