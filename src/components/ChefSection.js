import ChefCard from "./ChefCard";

export default function ChefSection() {
  const chefs = [
    {
      name: "Juan Carlos",
      img: "/eggflip/img/top-chefs/img_1.jpg",
      recipesCount: "10",
      cuisine: "Mexican",
    },
    {
      name: "Jane Doe",
      img: "/eggflip/img/top-chefs/img_2.jpg",
      recipesCount: "05",
      cuisine: "French",
    },
    {
      name: "Eric Accardi",
      img: "/eggflip/img/top-chefs/img_3.jpg",
      recipesCount: "13",
      cuisine: "Italian",
    },
    {
      name: "Chris Brown",
      img: "/eggflip/img/top-chefs/img_4.jpg",
      recipesCount: "08",
      cuisine: "American",
    },
    {
      name: "Ari Nakashima",
      img: "/eggflip/img/top-chefs/img_5.jpg",
      recipesCount: "09",
      cuisine: "Japanese",
    },
    {
      name: "Aadhya Singh",
      img: "/eggflip/img/top-chefs/img_6.jpg",
      recipesCount: "04",
      cuisine: "Indian",
    },
  ];
  return (
    <div className="section chefs">
      <h1 className="title">Our Top Chefs</h1>
      <div className="top-chefs-container">
        {chefs.map((chef) => (
          <ChefCard key={chef.name} chef={chef} />
        ))}
      </div>
    </div>
  );
}
