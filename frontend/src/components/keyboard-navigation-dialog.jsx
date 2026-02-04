import { Portal } from "solid-js/web";
import { IconClear } from "@stackoverflow/stacks-icons/icons";

export function KeyboardNavigationDialog(props) {
  return (
    <Portal>
      <div class="dialog-backdrop" onClick={() => setShowHelpDialog(false)}>
        <dialog open class="help-dialog" onClick={(e) => e.stopPropagation()}>
          <div class="dialog__body help-dialog__body">
            <div class="help-dialog__header">
              <h2 class="help-dialog__title">Keyboard Shortcuts</h2>
              <button
                type="button"
                class="dialog__toolbar-btn help-dialog__close-btn"
                onClick={() => props.onClose()}
                title="Close"
              >
                <span innerHTML={IconClear} />
              </button>
            </div>

            <div class="help-dialog__sections">
              <div class="help-dialog__section">
                <h3 class="help-dialog__section-title">Navigation</h3>
                <table class="help-dialog__table">
                  <tbody>
                    <tr>
                      <td class="help-dialog__key-cell">↑ or k</td>
                      <td class="help-dialog__desc-cell">
                        Move focus to card above
                      </td>
                    </tr>
                    <tr>
                      <td class="help-dialog__key-cell">↓ or j</td>
                      <td class="help-dialog__desc-cell">
                        Move focus to card below
                      </td>
                    </tr>
                    <tr>
                      <td class="help-dialog__key-cell">← or h</td>
                      <td class="help-dialog__desc-cell">
                        Move focus to previous lane
                      </td>
                    </tr>
                    <tr>
                      <td class="help-dialog__key-cell">→ or l</td>
                      <td class="help-dialog__desc-cell">
                        Move focus to next lane
                      </td>
                    </tr>
                    <tr>
                      <td class="help-dialog__key-cell">Cmd+↑</td>
                      <td class="help-dialog__desc-cell">
                        Move card up within lane
                      </td>
                    </tr>
                    <tr>
                      <td class="help-dialog__key-cell">Cmd+↓</td>
                      <td class="help-dialog__desc-cell">
                        Move card down within lane
                      </td>
                    </tr>
                    <tr>
                      <td class="help-dialog__key-cell">Cmd+←</td>
                      <td class="help-dialog__desc-cell">
                        Move card to previous lane
                      </td>
                    </tr>
                    <tr>
                      <td class="help-dialog__key-cell">Cmd+→</td>
                      <td class="help-dialog__desc-cell">
                        Move card to next lane
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div class="help-dialog__section">
                <h3 class="help-dialog__section-title">Card Actions</h3>
                <table class="help-dialog__table">
                  <tbody>
                    <tr>
                      <td class="help-dialog__key-cell">Enter or s</td>
                      <td class="help-dialog__desc-cell">
                        Open/edit focused card
                      </td>
                    </tr>
                    <tr>
                      <td class="help-dialog__key-cell">x</td>
                      <td class="help-dialog__desc-cell">
                        Create new card in current lane
                      </td>
                    </tr>
                    <tr>
                      <td class="help-dialog__key-cell">z</td>
                      <td class="help-dialog__desc-cell">
                        Rename focused card
                      </td>
                    </tr>
                    <tr>
                      <td class="help-dialog__key-cell">a</td>
                      <td class="help-dialog__desc-cell">
                        Archive focused card (with confirmation)
                      </td>
                    </tr>
                    <tr>
                      <td class="help-dialog__key-cell">d</td>
                      <td class="help-dialog__desc-cell">
                        Delete focused card (with confirmation)
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div class="help-dialog__section">
                <h3 class="help-dialog__section-title">Lane Actions</h3>
                <table class="help-dialog__table">
                  <tbody>
                    <tr>
                      <td class="help-dialog__key-cell">c</td>
                      <td class="help-dialog__desc-cell">
                        Toggle collapse/expand for focused lane
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div class="help-dialog__section">
                <h3 class="help-dialog__section-title">Card Editor</h3>
                <table class="help-dialog__table">
                  <tbody>
                    <tr>
                      <td class="help-dialog__key-cell">Cmd+1</td>
                      <td class="help-dialog__desc-cell">
                        Open tag input (when card is open)
                      </td>
                    </tr>
                    <tr>
                      <td class="help-dialog__key-cell">Cmd+2</td>
                      <td class="help-dialog__desc-cell">
                        Open due date calendar (when card is open)
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div class="help-dialog__section">
                <h3 class="help-dialog__section-title">General</h3>
                <table class="help-dialog__table">
                  <tbody>
                    <tr>
                      <td class="help-dialog__key-cell">Esc</td>
                      <td class="help-dialog__desc-cell">
                        Clear focus / Close dialog
                      </td>
                    </tr>
                    <tr>
                      <td class="help-dialog__key-cell">?</td>
                      <td class="help-dialog__desc-cell">
                        Show this help dialog
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </dialog>
      </div>
    </Portal>
  );
}
