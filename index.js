function openTopRowMenu() {
  document.querySelector("#main > fire-router-outlet > authentication-index > ng-component > authentication-users-ng1 > div > div > div > div > md-single-grid > md-card > div > table > tbody:nth-child(4) > tr > td.table-row-actions > div > md-menu > button > md-icon")
    .click()
}

function pressMenuDeleteButton() {
  document.querySelector("md-menu-content > md-menu-item:nth-child(2) > button").click();
}

function pressModalDeleteButton() {
  document.querySelector("button.md-raised.md-warn.md-button.md-gmp-blue-theme").click();
}

const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay))

async function deteleFirstRowUser() {
  openTopRowMenu();
  await sleep(300)
  pressMenuDeleteButton();
  await sleep(400)
  pressModalDeleteButton()
  await sleep(850)
}

async function deleteUsersInAmountOf(n) {
  for(let i = 0; i < n; i++) {
    await deteleFirstRowUser();
    console.log(`Users deleted: ${i + 1}`);
  }
}
