const initRedeemSelection = () => {
  const selector = 'c_redeem-for-btn';
  const redeemBtns = [].slice.call(document.querySelectorAll(`.${selector}`));

  const selectOne = (selector, target, collection) => {

    const className = `${selector}--selected`;
    collection.forEach(el => { el.classList.remove(className) });
    target.classList.add(className);
  };

  redeemBtns.forEach(btn => {
    btn.addEventListener('click', e => {
      selectOne(selector, btn, redeemBtns);
    })
  });
};

export default initRedeemSelection;