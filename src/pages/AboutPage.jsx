import apiIntroduceImage from '../assets/images/api-introduce.png';

export default function AboutPage() {
  return (
    <>
      <h2 className="text-gray-800 text-8xl md:text-9xl font-bold m-4">
        About
      </h2>
      <p className="text-gray-300 text-5xl ml-4 leading-relaxed">
        극장 영화 순위를 한 눈에!
        <br />
        상세 영화 정보는 포스터를 눌러주세요.
        <br />
      </p>
      <img src={apiIntroduceImage} alt="api introduce" className="rounded-md" />
    </>
  );
}
