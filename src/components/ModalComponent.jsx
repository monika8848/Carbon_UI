import React from "react";

const ModalComponent = () => {
  return (
    <>
      <button
        class="bx--btn bx--btn--primary"
        type="button"
        data-modal-target="#modal-njovfhx1u9o"
      >
        Show modal
      </button>

      <div
        data-modal
        id="modal-njovfhx1u9o"
        class="bx--modal "
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-njovfhx1u9o-label"
        aria-describedby="modal-njovfhx1u9o-heading"
        tabindex="-1"
      >
        <div class="bx--modal-container">
          <div class="bx--modal-header">
            <p
              class="bx--modal-header__label bx--type-delta"
              id="modal-njovfhx1u9o-label"
            >
              Optional label
            </p>
            <p
              class="bx--modal-header__heading bx--type-beta"
              id="modal-njovfhx1u9o-heading"
            >
              Modal heading
            </p>
            <button
              class="bx--modal-close"
              type="button"
              data-modal-close
              aria-label="close modal"
            >
              <svg
                focusable="false"
                preserveAspectRatio="xMidYMid meet"
                // style="will-change: transform;"
                xmlns="http://www.w3.org/2000/svg"
                class="bx--modal-close__icon"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                aria-hidden="true"
              >
                <path d="M12 4.7L11.3 4 8 7.3 4.7 4 4 4.7 7.3 8 4 11.3 4.7 12 8 8.7 11.3 12 12 11.3 8.7 8z"></path>
              </svg>
            </button>
          </div>

          <div class="bx--modal-content">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id
              accumsan augue. Phasellus consequat augue vitae tellus tincidunt
              posuere. Curabitur justo urna, consectetur vel elit iaculis,
              ultrices condimentum risus. Nulla facilisi. Etiam venenatis
              molestie tellus. Quisque consectetur non risus eu rutrum.{" "}
            </p>
          </div>
          <div class="bx--modal-content--overflow-indicator"></div>

          <div class="bx--modal-footer">
            <button
              class="bx--btn bx--btn--secondary"
              type="button"
              data-modal-close
            >
              Secondary button
            </button>
            <button
              class="bx--btn bx--btn--primary"
              type="button"
              data-modal-primary-focus
            >
              Primary button
            </button>
          </div>
        </div>

        <span tabindex="0"></span>
      </div>
    </>
  );
};

export default ModalComponent;
