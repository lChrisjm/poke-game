import usePoke from "../../hooks/usePoke"

export default function LeftStatus() {
  const { playerRow } = usePoke();

  return (
    <div className=" px-1 text-center">
      <p className="font-changa text-xl leading-none">Racha:</p>
        <span className="font-play text-lg ">{playerRow}</span>
    </div>
  )
}