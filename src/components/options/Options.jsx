import css from './Options.module.css';

export default function Options({ onUpdate, onReset, totalValue }) {
  return (
    <div className={css.container}>
      <button
        className={css.goodBtn}
        type="button"
        onClick={() => onUpdate('good')}
      >
        Good
      </button>
      <button
        className={css.neutralBtn}
        type="button"
        onClick={() => onUpdate('neutral')}
      >
        Neutral
      </button>
      <button
        className={css.badBtn}
        type="button"
        onClick={() => onUpdate('bad')}
      >
        Bad
      </button>

      {totalValue > 0 && (
        <button className={css.resetBtn} type="button" onClick={onReset}>
          Reset
        </button>
      )}
    </div>
  );
}
