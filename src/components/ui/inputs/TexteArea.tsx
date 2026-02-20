function TexteArea() {
  return (
    <textarea
      className={`relative centerBetween font-secondary font-normal text-[16px] bg-bg-input text-primary-input p-4 border rounded-2xl placeholder:text-primary-input focus-within:ring-1 focus-within:ring-border-focus`}
      placeholder="Saisir un commentaire..."
    ></textarea>
  );
}

export default TexteArea;
