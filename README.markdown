# jQuery Semantic Accordion плагин

Маленький jQuery плагин для создания сворачивающихся блоков в стиле - «Аккордеон».

## Ключевые особенности

 * семантическая чистота вашего HTML-кода
 * малый размер плагина(951 байт - minify версия)
 * простота использования

### Пример использования

	<!doctype html>
	<html>
	<head>
		<title>jQuery Semantic Accordion</title>
	
		<style>
		/* Accordion block 
		------------------------------ */
		
		.b-accordion-head {
			margin: 1px 0;
			line-height: 28px;
			font-size: 14px;
			padding: 0 16px;
			background: #eee;
			color: #333;
			border-radius: 4px;
			cursor: pointer;
		}
		.b-accordion-opened {
			background: #f2f2f5;
			font-weight: bold;
			color: #000;
		}
		.b-accordion-body { overflow: hidden; }
		.b-accordion-content { padding: 16px; }
		
		</style>
		
		<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.4.3/jquery.min.js"></script>
		<script src="js/jquery.semanticAccordion.min.js"></script>
		<script>
		$(function() {		
			$('.b-accordion').sematicAccordion();
		});
		</script>
	</head>
	<body>
		<dl class="b-accordion">
			<dt>Heading 1</dt>
			<dd>
				<p>Lorem ipsum dolor sit amet...</p>
			</dd>
			<dt>Heading 2</dt>
			<dd>
				<p>Lorem ipsum dolor sit amet...</p>
			</dd>
			<dt>Heading 3</dt>
			<dd>
				<p>Lorem ipsum dolor sit amet...</p>
			</dd>
		</dl><!-- b-accordion -->
	</body>
	</html>

### HTML до работы jQuery Semantic Accordion

	<dl class="b-accordion">
		<dt>Heading 1</dt>
		<dd>
			<p>Lorem ipsum dolor sit amet...</p>
		</dd>
		<dt>Heading 2</dt>
		<dd>
			<p>Lorem ipsum dolor sit amet...</p>
		</dd>
		<dt>Heading 3</dt>
		<dd>
			<p>Lorem ipsum dolor sit amet...</p>
		</dd>
	</dl><!-- b-accordion -->

### HTML после работы jQuery Semantic Accordion

	<script>
	$(function() {
		$('.b-accordion').sematicAccordion();
	});
	</script>
	
	<dl class="b-accordion">
		<dt class="b-accordion-head b-accordion-opened">Heading 1</dt>
		<dd class="b-accordion-body">
			<div class="b-accordion-content">
				<p>Lorem ipsum dolor sit amet...</p>
			</div>
		</dd>
		<dt class="b-accordion-head b-accordion-closed">Heading 2</dt>
		<dd class="b-accordion-body" style="display: none; height: 0px;">
			<div class="b-accordion-content">
				<p>Lorem ipsum dolor sit amet...</p>
			</div>
		</dd>
		<dt class="b-accordion-head b-accordion-closed">Heading 3</dt>
		<dd class="b-accordion-body" style="display: none; height: 0px;">
			<div class="b-accordion-content">
				<p>Lorem ipsum dolor sit amet...</p>
			</div>
		</dd>
	</dl>

Если JavaScript не работает, структура списка остается семантически прозрачной для клиента.

## Настройки

**headSelector - string, '> dt'**  
CSS-селектор для выборки элементов, участвующих в построении навигации.

**bodySelector - string, '> dd'**  
CSS-селектор для выборки элементов c содержимым сворачивающегося блока.
	// навигационный список составляется из тэгов заголовков(h2)
	// содержимое блока заключено в div
	$(&apos;div.b-tabs&apos;).sematicTabs({
	headSelector: &apos;&gt; h2&apos;,
	bodySelector: &apos;&gt; div&apos;
	});

**CSSClass - string, 'b-accordion'**  
CSS-класс, который будет применён к элементу без своего класса.

**HeadSuffix - string, '-head'**  
Суффикс CSS-класса для навигационного списка. Полное имя класса складывается из имени класса блока и 'HeadSuffix'.

**BodySuffix - string, '-body'**  
Суффикс CSS-класса для содержимого блока. Полное имя класса складывается из имени класса блока и 'BodySuffix'.

**ContentSuffix - string, '-content'**  
Суффикс CSS-класса для содержимого блока, второй контейнер, необходим для правильной работы плагина. Полное имя класса складывается из имени класса блока и 'ContentSuffix'.

**OpenedSuffix - string, '-opened'**  
Суффикс CSS-класса для развернутого элемента. Полное имя класса складывается из имени класса блока и 'OpenedSuffix'.

**ClosedSuffix - string, '-closed'**  
Суффикс CSS-класса для свернутого элемента. Полное имя класса складывается из имени класса блока и 'OpenedSuffix'.