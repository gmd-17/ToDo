
export default function initTodo() {

    document.addEventListener('click', (e) => {
        const click = e.target
        const isTitleClicked = click.classList.contains('todo-title');

        if (isTitleClicked) {
            const clickedTitleId = click.getAttribute('id').split(':')[0];
            const detailsDiv = document.getElementById(`${clickedTitleId}:details`);
            detailsDiv.classList.toggle('expanded');
        }

    });

}