import { qs, gebi, html } from "../utils.js";
import Home from "./Home.js";
export default class Creator extends Home {
	constructor() {
		super();
	}
	render() {
		return html`
			<div class="editor-outer">
				<div class="editor-container">
					<div class="editor-controls" style="top: ${qs("header").clientHeight}px">
						<div class="editor-buttons">
							<div class="editor-control-block">
								<div class="editor-control-header">Бичилт</div>
								<div class="editor-control-body">
									<ul>
										<li>
											<button class="btn-editor" data-command="fontSize">
												<i class="fas fa-text-width"></i>
											</button>
										</li>
										<li>
											<button class="btn-editor" data-command="fontColor">
												<i class="fas fa-fill-drip"></i>
											</button>
										</li>
										<li>
											<button class="btn-editor" data-command="underline">
												<i class="fas fa-underline"></i>
											</button>
										</li>
										<li>
											<button class="btn-editor" data-command="italic">
												<i class="fas fa-italic"></i>
											</button>
										</li>
										<li>
											<button class="btn-editor" data-command="bold">
												<i class="fas fa-bold"></i>
											</button>
										</li>
										<li>
											<button class="btn-editor" data-command="justifyLeft">
												<i class="fas fa-align-left"></i>
											</button>
										</li>
										<li>
											<button class="btn-editor" data-command="justifyCenter">
												<i class="fas fa-align-center"></i>
											</button>
										</li>
										<li>
											<button class="btn-editor" data-command="justifyRight">
												<i class="fas fa-align-right"></i>
											</button>
										</li>
										<li>
											<button class="btn-editor" data-command="justifyFull">
												<i class="fas fa-align-justify"></i>
											</button>
										</li>
										<li>
											<button class="btn-editor" data-command="justifyFull">
												<i class="fas fa-align-justify"></i>
											</button>
										</li>
										<li>
											<button
												class="btn-editor"
												data-command="insertUnorderedList"
											>
												<i class="fas fa-list-ul"></i>
											</button>
										</li>
										<li>
											<button
												class="btn-editor"
												data-command="insertOrderedList"
											>
												<i class="fas fa-list-ol"></i>
											</button>
										</li>
										<li>
											<button class="btn-editor" data-command="createLink">
												<i class="fas fa-link"></i>
											</button>
										</li>
										<li>
											<button class="btn-editor" data-command="indent">
												<i class="fas fa-indent"></i>
											</button>
										</li>
										<li>
											<button class="btn-editor" data-command="outdent">
												<i class="fas fa-outdent"></i>
											</button>
										</li>
									</ul>
									<div class="dropdown fontSizeDropdown">
										<ul>
											<li><button id="fontSize1">1</button></li>
											<li><button id="fontSize2">2</button></li>
											<li><button id="fontSize3">3</button></li>
											<li><button id="fontSize4">4</button></li>
											<li><button id="fontSize5">5</button></li>
											<li><button id="fontSize6">6</button></li>
											<li><button id="fontSize7">7</button></li>
										</ul>
									</div>
									<div class="dropdown fontColorDropdown">
										<ul>
											<li>
												<button id="fontColor1">
													<div
														class="colorDiv"
														style="
                                                    background-color: #f88ba3;
                                                "
													></div>
												</button>
											</li>
											<li>
												<button id="fontColor2">
													<div
														class="colorDiv"
														style="
                                                    background-color: #282828;
                                                "
													></div>
												</button>
											</li>
											<li>
												<button id="fontColor3">
													<div
														class="colorDiv"
														style="
                                                    background-color: #0496ff;
                                                "
													></div>
												</button>
											</li>
											<li>
												<button id="fontColor4">
													<div
														class="colorDiv"
														style="
                                                    background-color: #ffbd00;
                                                "
													></div>
												</button>
											</li>
										</ul>
									</div>
								</div>
							</div>
							<hr />
							<div class="editor-control-block">
								<div class="editor-control-header">Зураг</div>
								<div class="editor-control-body">
									<ul>
										<li>
											<button class="btn-editor" data-command="insertImage">
												<i class="fas fa-images"></i>
											</button>
										</li>
									</ul>
								</div>
							</div>
						</div>
						<div class="publish-button">
							<button id="publishButton">Нийтлэх</button>
						</div>
						<hr />
					</div>
					<!-- https://codepen.io/netsi1964/full/QbLLGW -->
					<div class="container">
						<!-- <div id="controls">
                            <div class="edge1"></div>
                            <div class="edge2"></div>
                            <div class="edge3"></div>
                            <div class="edge4"></div>
                        </div> -->
						<div class="editor" id="editor" contenteditable="true"></div>
					</div>
				</div>
			</div>
			<div class="creatorModal" contenteditable="false">
				<form id="creatorForm">
					<label for="creatorTitle">Гарчиг</label>
					<input name="title" id="creatorTitle" />
					<label for="creatorDescription">Тайлбар</label>
					<textarea name="description" id="creatorDescription"> </textarea>
					<label for="creatorThumbnail">Жижиг зураг</label>
					<input name="thumbnail" id="creatorThumbnail" />
					<label for="creatorImage">Том зураг</label>
					<input name="image" id="creatorImage" />
					<div style="text-align: center;">
						<input type="submit" value="Нийтлэх" />
					</div>
				</form>
			</div>
		`;
	}
	afterRender() {
		function insertNodeAtCursor(node, type) {
			//get Cursor position
			var sel, range, html;
			if (window.getSelection) {
				sel = window.getSelection();
				if (
					sel.getRangeAt &&
					sel.rangeCount &&
					sel.baseNode &&
					sel.baseNode.id !== "creatorForm" &&
					sel.baseNode &&
					sel.baseNode.parentNode &&
					sel.baseNode.parentNode?.id !== "creatorForm" &&
					(!sel.baseNode ||
						(sel.baseNode.classList &&
							!sel.baseNode.classList.contains("editor-controls") &&
							!sel.baseNode.classList.contains("fa-images")) ||
						(sel?.baseNode?.parentNode &&
							sel.baseNode.parentNode.classList.contains("editor")) ||
						(sel?.baseNode?.parentNode?.parentNode &&
							sel.baseNode.parentNode.parentNode.classList.contains("editor")))
				) {
					if (
						sel.baseNode?.parentNode?.parentNode &&
						sel.baseNode.parentNode.parentNode.classList.contains("editor")
					) {
						// document.querySelector(`${sel.baseNode.parentNode.id}`).insertAdjacentHTML("afterend", );
						sel.baseNode.parentNode.parentNode.insertBefore(
							node,
							sel.baseNode.parentNode.nextSibling
						);
						if (type === "div") {
							range = document.createRange();
							node.innerHTML = "&#8203;";
							range.setStart(node, 1);
							range.collapse(true);
							sel.removeAllRanges();
							sel.addRange(range);
						}
					} else {
						sel.getRangeAt(0).insertNode(node);
						if (type === "div") {
							range = document.createRange();
							node.innerHTML = "&#8203;";
							range.setStart(node, 1);
							range.collapse(true);
							sel.removeAllRanges();
							sel.addRange(range);
						}
					}
				}
			} else if (document.selection && document.selection.createRange) {
				range = document.selection.createRange();
				html = node.nodeType == 3 ? node.data : node.outerHTML;
				range.pasteHTML(html);
				if (type === "div") {
					sel.moveStart("character", char);
					sel.select();
				}
			}
		}

		function lowerWidth(e) {
			if (!e.classList) {
				e.classList.add("default-11");
			} else {
				if (e.classList.contains("default-12")) {
					e.classList.add("default-11");
					e.classList.remove("default-12");
				} else if (e.classList.contains("default-11")) {
					e.classList.add("default-10");
					e.classList.remove("default-11");
				} else if (e.classList.contains("default-10")) {
					e.classList.add("default-9");
					e.classList.remove("default-10");
				} else if (e.classList.contains("default-9")) {
					e.classList.add("default-8");
					e.classList.remove("default-9");
				} else if (e.classList.contains("default-8")) {
					e.classList.add("default-7");
					e.classList.remove("default-8");
				} else if (e.classList.contains("default-7")) {
					e.classList.add("default-6");
					e.classList.remove("default-7");
				} else if (e.classList.contains("default-6")) {
					e.classList.add("default-5");
					e.classList.remove("default-6");
				} else if (e.classList.contains("default-5")) {
					e.classList.add("default-4");
					e.classList.remove("default-5");
				} else if (e.classList.contains("default-4")) {
					e.classList.add("default-3");
					e.classList.remove("default-4");
				} else if (e.classList.contains("default-3")) {
					e.classList.add("default-2");
					e.classList.remove("default-3");
				} else if (e.classList.contains("default-1")) {
				} else {
					e.classList.add("default-11");
				}
			}
		}

		function higherWidth(e) {
			if (!e.classList) {
				e.classList.add("default-2");
			} else {
				if (e.classList.contains("default-11")) {
					e.classList.add("default-12");
					e.classList.remove("default-11");
				} else if (e.classList.contains("default-10")) {
					e.classList.add("default-11");
					e.classList.remove("default-10");
				} else if (e.classList.contains("default-9")) {
					e.classList.add("default-10");
					e.classList.remove("default-9");
				} else if (e.classList.contains("default-8")) {
					e.classList.add("default-9");
					e.classList.remove("default-8");
				} else if (e.classList.contains("default-7")) {
					e.classList.add("default-8");
					e.classList.remove("default-7");
				} else if (e.classList.contains("default-6")) {
					e.classList.add("default-7");
					e.classList.remove("default-6");
				} else if (e.classList.contains("default-5")) {
					e.classList.add("default-6");
					e.classList.remove("default-5");
				} else if (e.classList.contains("default-4")) {
					e.classList.add("default-5");
					e.classList.remove("default-4");
				} else if (e.classList.contains("default-3")) {
					e.classList.add("default-4");
					e.classList.remove("default-3");
				} else if (e.classList.contains("default-2")) {
					e.classList.add("default-3");
					e.classList.remove("default-2");
				} else if (e.classList.contains("default-1")) {
					e.classList.add("default-2");
					e.classList.remove("default-1");
				} else {
					e.classList.add("default-12");
				}
			}
		}

		function clearControls() {
			let controls = document.querySelectorAll(".controls");
			if (controls) {
				[...(controls || [])].map((control) => {
					control.remove();
				});
			}
		}

		//Editor-Buttons
		let buttons = document.querySelectorAll(".btn-editor");
		buttons.forEach((button) => {
			button.addEventListener("click", () => {
				let cmd = button.dataset["command"];

				if (cmd === "fontSize" || cmd === "fontColor") {
					if (cmd.includes("Size")) {
						document.querySelector(".fontColorDropdown").classList =
							"dropdown fontColorDropdown";
						document.querySelector(".fontSizeDropdown").classList.toggle("active");
					} else {
						document.querySelector(".fontSizeDropdown").classList =
							"dropdown fontSizeDropdown";
						document.querySelector(".fontColorDropdown").classList.toggle("active");
					}
				} else if (cmd === "createLink" || cmd === "insertImage") {
					// let url = "/assets/images/authors-small/author-1.webp";
					// document.execCommand(cmd, false, url);

					let element;
					if (cmd.includes("Image")) {
						element = document.createElement("img");
						element.src = prompt("Зургийн хаягийг оруулна уу.");
						element.className = "default-12";
					} else {
					}

					insertNodeAtCursor(element, "img");
				} else {
					document.execCommand(cmd, false, null);
				}
			});
		});

		//Save
		// if (localStorage.getItem('editor_saved') !== null) {
		// 	document.querySelector('.editor').innerHTML = localStorage.getItem('editor_saved');
		// }
		// document.addEventListener('keydown', function(e) {
		// 	localStorage.setItem('editor_saved', document.querySelector('.editor').innerHTML);
		// });

		//DefaultParagraph separator
		// document.execCommand("defaultParagraphSeparator", false, "");
		//fontSize
		for (let i = 1; i <= 7; i++) {
			document.querySelector(`#fontSize${i}`).addEventListener("click", () => {
				document.execCommand("fontSize", false, i);
				document.querySelector(".fontSizeDropdown").classList = "dropdown fontSizeDropdown";
			});
		}
		//fontColor
		const fontDic = {
			1: "#f88ba3",
			2: "#282828",
			3: "#0496ff",
			4: "#ffbd00"
		};
		for (let i = 1; i <= 4; i++) {
			document.querySelector(`#fontColor${i}`).addEventListener("click", () => {
				document.execCommand("foreColor", false, fontDic[i]);
				document.querySelector(".fontColorDropdown").classList =
					"dropdown fontColorDropdown";
			});
		}

		let editor = document.querySelector(".editor");

		//selectedEdges
		const corners = [
			{ left: "-7.5px", top: "-7.5px" },
			{ top: "-7.5px", right: "-7.5px" },
			{ bottom: "-7.5px", right: "-7.5px" },
			{ bottom: "-7.5px", left: "-7.5px" }
		];
		const points = ["zde", "bde", "bdo", "zdo"];

		let resizing = false,
			targetObj = {},
			targetProxy = new Proxy(targetObj, {
				set: function (target, key, value) {
					// if(target[key] && target[key].classList && target[key].classList.contains("selected")) target[key].classList.toggle("selected");
					if (value.parentNode === editor && target[key]) {
						target[key].setAttribute("id", "");
						// if(target[key].previousSibling) target[key].previousSibling.remove();
					}
					target[key] = value;
					if (value.parentNode === editor) {
						value.setAttribute("id", "selected");
						console.log(value);

						let mask = document.createElement("div");
						mask.classList.add("controls");
						mask.style.width = `${value.offsetWidth}px`;
						mask.style.height = `${value.offsetHeight}px`;

						if (
							(parseInt(value?.previousSibling?.classList[0]?.split("-")[1]) || 12) +
								parseInt(value?.classList[0]?.split("-")[1] || 12) <=
							12
						) {
							let cords = value.getBoundingClientRect();
							mask.style.top = cords.top + "px";
							mask.style.left = cords.left + "px";
						}

						for (let i = 0; i < 4; i++) {
							let edge = document.createElement("div");
							edge.classList.toggle("edge");
							edge.setAttribute("id", points[i]);
							edge.classList.toggle("edge-control");
							edge.style.position = "absolute";
							edge.style.width = `15px`;
							edge.style.height = `15px`;
							edge.style.backgroundColor = "rgba(0,0,0,0.2)";
							edge.style.cursor = "pointer";
							Object.keys(corners[i]).map((prop) => {
								edge.style[prop] = corners[i][prop];
							});
							mask.insertAdjacentElement("beforeend", edge);
						}
						value.insertAdjacentHTML("beforebegin", mask.outerHTML);
					}
					let edges = document.querySelectorAll(".edge");
					if (edges && (edges || []).length > 0) {
						[...(edges || [])].map((edge) => {
							edge.draggable = true;
							if (edge.id === "zde") {
								let initial = edge.getBoundingClientRect();
								edge.addEventListener("drag", (e) => {
									if (!resizing && initial.x - 100 - initial.width < e.offsetX) {
										resizing = true;
										lowerWidth(value);
										let lefttop = document.querySelector(".controls");
										lefttop.style.width = value.clientWidth + "px";
										lefttop.style.height = value.clientHeight + "px";
										setTimeout(() => {
											resizing = false;
										}, 150);
									}
								});
							} else if (edge.id === "bde") {
								let initial = edge.getBoundingClientRect();
								edge.addEventListener("drag", (e) => {
									if (!resizing) {
										if (e.offsetX < 0) {
											resizing = true;
											lowerWidth(value);
											let lefttop = document.querySelector(".controls");
											lefttop.style.width = value.clientWidth + "px";
											lefttop.style.height = value.clientHeight + "px";
											setTimeout(() => {
												resizing = false;
											}, 150);
										} else if (e.offsetX > 0) {
											resizing = true;
											higherWidth(value);
											let lefttop = document.querySelector(".controls");
											lefttop.style.width = value.clientWidth + "px";
											lefttop.style.height = value.clientHeight + "px";
											setTimeout(() => {
												resizing = false;
											}, 150);
										}
									}
								});
							} else if (edge.id === "bdo") {
								let initial = edge.getBoundingClientRect();
								edge.addEventListener("drag", (e) => {
									if (!resizing) {
										if (e.offsetX < 0) {
											resizing = true;
											lowerWidth(value);
											let lefttop = document.querySelector(".controls");
											lefttop.style.width = value.clientWidth + "px";
											lefttop.style.height = value.clientHeight + "px";
											setTimeout(() => {
												resizing = false;
											}, 150);
										} else if (e.offsetX > 0) {
											resizing = true;
											higherWidth(value);
											let lefttop = document.querySelector(".controls");
											lefttop.style.width = value.clientWidth + "px";
											lefttop.style.height = value.clientHeight + "px";
											setTimeout(() => {
												resizing = false;
											}, 150);
										}
									}
								});
							} else {
								let initial = edge.getBoundingClientRect();
								edge.addEventListener("drag", (e) => {
									if (!resizing && initial.x - 100 - initial.width < e.offsetX) {
										resizing = true;
										lowerWidth(value);
										let lefttop = document.querySelector(".controls");
										lefttop.style.width = value.clientWidth + "px";
										lefttop.style.height = value.clientHeight + "px";
										setTimeout(() => {
											resizing = false;
										}, 150);
									}
								});
							}
						});
					}
					return true;
				}
			});
		document.addEventListener("keydown", (e) => {
			if (e.code === "Delete" || e.code === "Escape" || e.code === "Backspace") {
				clearControls();
			}
			if (e.code === "Enter") {
				e.preventDefault();
				let div = document.createElement("div");
				div.setAttribute("id", `${Date.now()}-${Math.random()}`);
				div.classList.add("default-12");
				insertNodeAtCursor(div, "div");
			}
		});
		document.addEventListener("click", (e) => {
			if (!e.target.classList.contains("edge-control")) {
				clearControls();
				targetProxy.selected = e.target;
			}
		});
		qs("#publishButton").addEventListener("click", (e) => {
			qs(".overlay").classList = "overlay active";
			qs(".creatorModal").classList = "creatorModal active";
			qs("body").style.overflow = "hidden";
			qs("body").style.height = "100vh";
		});
		qs("#creatorForm").addEventListener("submit", (e) => {
			e.preventDefault();
			console.log(qs("#creatorTitle").value);
			fetch(`/api/article/submit`, {
				method: "POST",
				headers: {
					Accept: "application/json",
					"Content-type": "application/json"
				},
				body: JSON.stringify({
					title: qs("#creatorTitle").value,
					description: qs("#creatorDescription").value,
					image: qs("#creatorImage").value,
					thumbnail: qs("#creatorThumbnail").value,
					body: qs("#editor").innerHTML
				})
			})
				.then((c) => c.text())
				.then((c) => JSON.parse(c))
				.then((c) => {
                    if(c.success){
                        this.on('/');
                    }else{
						this.emit("error", c.msg);
                    }
                });
		});
	}
}
