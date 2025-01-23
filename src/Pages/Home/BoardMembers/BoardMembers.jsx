import { useEffect, useState } from "react";
import SectionHeader from "../../../Components/SectionHeader/SectionHeader";
import BoardMembersCard from "./BoardMembersCard";
import Container from "../../../Components/Container/Container";
import FadeInAnimation from "../../../Components/FadeInAnimation/FadeInAnimation";

const BoardMembers = () => {
  const [staffs, setStaffs] = useState([]);

  useEffect(() => {
    fetch("boardMembers.json")
      .then((res) => res.json())
      .then((data) => setStaffs(data));
  }, []);

  return (
    <div className="dark:bg-gray-800 pb-10 lg:pb-20" id="boardMembers">
      <Container>
        <SectionHeader heading={"Board Members"}></SectionHeader>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 md:gap-5 lg:gap-5 gap-5 ">
          {staffs.map((staff, index) => (
            <FadeInAnimation key={staff.id} custom={index}>
              <BoardMembersCard staff={staff}></BoardMembersCard>
            </FadeInAnimation>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default BoardMembers;
