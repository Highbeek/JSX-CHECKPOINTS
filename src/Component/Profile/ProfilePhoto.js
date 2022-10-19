import pic from './1.png';
console.log(pic);

export default function ProfilePhoto() {
  return (
    <div>
        <img src={pic} alt="pic" style={{width: "250px"}} />
    </div>
  )
}
