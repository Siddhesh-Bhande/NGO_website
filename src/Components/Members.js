import MemberInfo from "./MemberInfo";

export default function Members() {
  const memberDetails = [
    {
      type: "Primary Contact Person",
      FullName: "Darryl D. Barber",
      Title: "Programs Director",
      Cell: "443-484-6095",
    },
    {
      type: "Secondary Contact Person",
      FullName: "Ashley Sellman",
      Title: "Director",
      Cell: "443-922-0844",
    },
    {
      type: "",
      FullName: "Virginia Robert",
      Title: "Program Officer",
      Cell: "443-338-6137",
    },
  ];

  return memberDetails.map((member) => (
    <MemberInfo
      type={member.type}
      name={member.FullName}
      title={member.Title}
      cell={member.Cell}
    ></MemberInfo>
  ));
}
