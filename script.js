(function () {
  const getLang = () => {
    try {
      return window.DP_LANG || localStorage.getItem('dp_lang') || 'ro';
    } catch (e) {
      return window.DP_LANG || 'ro';
    }
  };

  const COPY = {
    ro: {
      errName: 'Indică numele părintelui sau al copilului',
      errPhone: 'Verifică numărul de telefon',
      okText: (name, phone) => `${name}, te vom contacta la numărul ${phone} pentru a confirma ora vizitei.`,
      before: 'Înainte',
      after: 'După',
      compareAria: (title) => `Compară înainte și după: ${title}`,
      igAria: 'Instagram medicului',
      works: [
        {
          t: 'Igienizare blândă pentru copii',
          d: 'Am îndepărtat delicat placa bacteriană și depunerile moi într-o ședință liniștită, protejând smalțul tânăr.',
          b: '#D8C27E', a: '#FFFFFF', bi: 'img/work/web-1-detartra.jpg', ai: 'img/work/web-2-detarta.jpg'
        },
        {
          t: 'Tratamentul cariei la dinții de lapte',
          d: 'Am curățat caria cu grijă și am refăcut forma naturală a dintelui, fără durere și fără grabă.',
          b: '#CDBB8A', a: '#FBFDFC', bi: 'img/work/car-1.jpg', ai: 'img/work/car-2.jpg'
        },
        {
          t: 'Refacere estetică și funcțională',
          d: 'Am restaurat dintele afectat și am păstrat spațiul corect pentru dezvoltarea armonioasă a zâmbetului.',
          b: '#C9B88F', a: '#FFFFFF', bi: 'img/work/rem-1.jpg', ai: 'img/work/rem-2.jpg'
        }
      ],
      docs: [
        {
          n: 'Specialist stomatologie pediatrică',
          r: 'Tratamentul dinților de lapte și acomodare',
          i: 'SP',
          photo: 'img/glav.jpg',
          b: 'Lucrează cu copiii în ritmul lor, explică pe înțeles și transformă vizita într-o experiență calmă și prietenoasă.',
          e: ['Studii superioare în stomatologie', 'Perfecționare în stomatologie pediatrică și acomodare'],
          d: ['Tratamentul cariilor la copii', 'Acomodarea copilului', 'Obturații estetice', 'Prevenție']
        },
        {
          n: 'Specialist profilaxie și igienă',
          r: 'Igienizare delicată și sigilarea fisurilor',
          i: 'PR',
          photo: 'img/raf.jpg',
          b: 'Ajută copiii și părinții să creeze obiceiuri sănătoase de îngrijire acasă și protejează smalțul de la vârste fragede.',
          e: ['Studii de profil medical', 'Cursuri de profilaxie dentară pediatrică'],
          d: ['Igienizare profesională', 'Sigilarea fisurilor', 'Recomandări pentru acasă', 'Control periodic']
        },
        {
          n: 'Specialist ortodonție copii',
          r: 'Creșterea arcadelor și corectarea mușcăturii',
          i: 'OR',
          photo: '',
          b: 'Urmărește dezvoltarea mușcăturii încă din perioada dinților de lapte și mixtă, alegând soluții potrivite vârstei.',
          e: ['Studii superioare în stomatologie', 'Specializare în ortodonție și ortopedie dento-facială'],
          d: ['Evaluarea mușcăturii', 'Aparate ortodontice pentru copii', 'Alignere și brevete', 'Monitorizare creștere']
        },
        {
          n: 'Specialist chirurgie pediatrică',
          r: 'Extracții delicate și îngrijire chirurgicală',
          i: 'CH',
          photo: '',
          b: 'Realizează proceduri chirurgicale blânde la copii și adolescenți, cu atenție la confort și recuperare ușoară.',
          e: ['Studii superioare în stomatologie', 'Pregătire în chirurgie dentară pediatrică'],
          d: ['Extracții blânde', 'Îngrijire post-intervenție', 'Consiliere părinți', 'Siguranță clinică']
        }
      ]
    },
    ru: {
      errName: 'Укажите имя родителя или ребёнка',
      errPhone: 'Проверьте номер телефона',
      okText: (name, phone) => `${name}, мы свяжемся с вами по номеру ${phone} и подберём удобное время визита.`,
      before: 'До',
      after: 'После',
      compareAria: (title) => `Сравнить до и после: ${title}`,
      igAria: 'Instagram врача',
      works: [
        {
          t: 'Бережная детская гигиена',
          d: 'Мягко сняли налёт и отложения за один спокойный визит, сохранив гладкой и здоровой молодую эмаль.',
          b: '#D8C27E', a: '#FFFFFF', bi: 'img/work/web-1-detartra.jpg', ai: 'img/work/web-2-detarta.jpg'
        },
        {
          t: 'Лечение кариеса молочного зуба',
          d: 'Аккуратно убрали кариес и восстановили естественную форму зуба — спокойно, без боли и спешки.',
          b: '#CDBB8A', a: '#FBFDFC', bi: 'img/work/car-1.jpg', ai: 'img/work/car-2.jpg'
        },
        {
          t: 'Восстановление формы и улыбки',
          d: 'Бережно восстановили повреждённый зуб и помогли сохранить комфорт при жевании и улыбке.',
          b: '#C9B88F', a: '#FFFFFF', bi: 'img/work/rem-1.jpg', ai: 'img/work/rem-2.jpg'
        }
      ],
      docs: [
        {
          n: 'Специалист детской стоматологии',
          r: 'Лечение молочных зубов и адаптация',
          i: 'ДС',
          photo: '',
          b: 'Подстраивается под темп ребёнка, понятно объясняет каждый шаг и помогает привыкнуть к приёму без страха.',
          e: ['Высшее медицинское образование по стоматологии', 'Повышение квалификации по детской стоматологии'],
          d: ['Лечение кариеса у детей', 'Визит-адаптация', 'Аккуратные пломбы', 'Профилактика']
        },
        {
          n: 'Специалист по профилактике',
          r: 'Мягкая гигиена и герметизация фиссур',
          i: 'ПР',
          photo: '',
          b: 'Помогает детям и родителям выстроить спокойную домашнюю гигиену и защищает эмаль с раннего возраста.',
          e: ['Профильное медицинское образование', 'Обучение по детской профилактике и гигиене'],
          d: ['Детская гигиена', 'Герметизация фиссур', 'Советы по уходу дома', 'Осмотры']
        },
        {
          n: 'Специалист по детскому прикусу',
          r: 'Развитие зубных рядов и ортодонтия',
          i: 'ОР',
          photo: '',
          b: 'Отслеживает формирование прикуса в период сменных зубов и подбирает решения под возраст ребёнка.',
          e: ['Высшее медицинское образование по стоматологии', 'Специализация по ортодонтии'],
          d: ['Оценка прикуса', 'Детские аппараты', 'Элайнеры и брекеты', 'Наблюдение в динамике']
        },
        {
          n: 'Детский хирург-стоматолог',
          r: 'Аккуратное удаление и хирургия',
          i: 'ХИ',
          photo: '',
          b: 'Проводит деликатные процедуры у детей и подростков с вниманием к комфорту и спокойному восстановлению.',
          e: ['Высшее медицинское образование по стоматологии', 'Подготовка по хирургической стоматологии'],
          d: ['Бережное удаление', 'Сопровождение после приёма', 'Консультация родителей', 'Комфорт и безопасность']
        }
      ]
    }
  };

  let activeDocs = COPY[getLang()].docs;

  /* Форма записи */
  const form = document.getElementById('f');
  if (form) {
    form.addEventListener('submit', function (ev) {
      ev.preventDefault();
      const dict = COPY[getLang()] || COPY.ro;
      const f = ev.target;
      const n = f.n.value.trim();
      const p = f.p.value.replace(/[^\d+]/g, '');
      const e = document.getElementById('e');
      if (!n) { e.textContent = dict.errName; f.n.focus(); return; }
      if (p.replace(/\D/g, '').length < 9) { e.textContent = dict.errPhone; f.p.focus(); return; }
      e.textContent = '';
      document.getElementById('fields').style.display = 'none';
      document.getElementById('okt').textContent = dict.okText(n, f.p.value.trim());
      document.getElementById('ok').classList.add('show');
    });
  }

  /* Примеры работ До / После */
  function teeth(c) {
    const x = [18, 66, 114, 162, 210, 258];
    const h = [84, 96, 104, 104, 96, 84];
    let r = '';
    for (let i = 0; i < 6; i++) {
      r += `<rect x="${x[i]}" y="${110 - h[i]}" width="40" height="${h[i]}" rx="16" fill="${c}" stroke="rgba(0,0,0,.12)"/>`;
    }
    return `<svg viewBox="0 0 300 120" aria-hidden="true">${r}</svg>`;
  }

  function renderWorks() {
    const box = document.getElementById('works');
    if (!box) return;
    const dict = COPY[getLang()] || COPY.ro;
    box.innerHTML = '';

    dict.works.forEach(function (w) {
      const el = document.createElement('article');
      el.className = 'work';
      el.innerHTML =
        `<div class="cmp">` +
        `<div class="l aft"${w.ai ? ` style="background-image:url(${w.ai})"` : ''}>${w.ai ? '' : teeth(w.a)}</div>` +
        `<div class="l bef"${w.bi ? ` style="background-image:url(${w.bi})"` : ''}>${w.bi ? '' : teeth(w.b)}</div>` +
        `<span class="t1">${dict.before}</span><span class="t2">${dict.after}</span><div class="bar"></div>` +
        `<input type="range" min="0" max="100" value="50" aria-label="${dict.compareAria(w.t)}">` +
        `</div>` +
        `<h3>${w.t}</h3><p>${w.d}</p>`;

      const cmp = el.querySelector('.cmp');
      el.querySelector('input').addEventListener('input', function (e) {
        cmp.style.setProperty('--p', e.target.value + '%');
      });
      box.appendChild(el);
    });
  }

  /* Карточки специалистов и модалка */
  function syncDoctorCards() {
    const dict = COPY[getLang()] || COPY.ro;
    activeDocs = dict.docs;
    const cards = document.querySelectorAll('.docs .doc');

    cards.forEach(function (card, i) {
      const d = activeDocs[i];
      if (!d) return;
      const ph = card.querySelector('.ph');
      if (ph) {
        ph.dataset.i = d.i;
        const p = ph.dataset.photo || d.photo;
        if (p) {
          ph.style.backgroundImage = `url("${p}")`;
          ph.classList.add('has');
        } else {
          ph.style.backgroundImage = '';
          ph.classList.remove('has');
        }
      }
      const h3 = card.querySelector('h3');
      const b = card.querySelector('b');
      const pEl = card.querySelector('p');
      if (h3) h3.textContent = d.n;
      if (b) b.textContent = d.r;
      if (pEl) pEl.textContent = d.b;

      const igLink = card.querySelector('.ig');
      if (igLink) igLink.setAttribute('aria-label', dict.igAria);
    });
  }

  const dm = document.getElementById('dm');
  function fill(el, arr) {
    el.innerHTML = '';
    arr.forEach(function (t) {
      const li = document.createElement('li');
      li.textContent = t;
      el.appendChild(li);
    });
  }

  document.querySelectorAll('.more').forEach(function (btn) {
    btn.addEventListener('click', function () {
      const idx = Number(btn.dataset.d);
      const d = activeDocs[idx] || activeDocs[0];
      const ph = document.getElementById('dmi');
      document.getElementById('dmn').textContent = d.n;
      document.getElementById('dmr').textContent = d.r;
      document.getElementById('dmb').textContent = d.b;
      fill(document.getElementById('dme'), d.e);
      fill(document.getElementById('dmd'), d.d);

      const card = btn.closest('.doc');
      const cardPh = card ? card.querySelector('.ph') : null;
      const src = d.photo || (cardPh && cardPh.dataset.photo) || '';
      ph.dataset.i = d.i;
      ph.style.backgroundImage = src ? `url("${src}")` : '';

      const link = card ? card.dataset.ig : '';
      const igBtn = document.getElementById('dmig');
      if (igBtn) {
        if (link) { igBtn.href = link; igBtn.hidden = false; }
        else { igBtn.hidden = true; }
      }
      dm.showModal();
    });
  });

  if (dm) {
    dm.querySelector('.x').addEventListener('click', function () { dm.close(); });
    document.getElementById('dmc').addEventListener('click', function () { dm.close(); });
    dm.addEventListener('click', function (e) { if (e.target === dm) dm.close(); });
  }

  /* Instagram-иконка на карточке, если задан data-ig */
  const IG = '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>';
  document.querySelectorAll('.doc[data-ig]').forEach(function (card) {
    if (card.querySelector('.ig')) return;
    const more = card.querySelector('.more');
    const row = document.createElement('div');
    const a = document.createElement('a');
    row.className = 'act';
    more.parentNode.insertBefore(row, more);
    row.appendChild(more);
    a.className = 'ig';
    a.href = card.dataset.ig;
    a.target = '_blank';
    a.rel = 'noopener';
    a.setAttribute('aria-label', (COPY[getLang()] || COPY.ro).igAria);
    a.innerHTML = IG;
    row.appendChild(a);
  });

  /* Прокрутка, меню и анимации появления */
  (function () {
    const ph = document.querySelector('input[name=p]');
    if (ph) {
      ph.addEventListener('focus', function () { if (!ph.value) ph.value = '+373 '; });
    }
    const bar = document.getElementById('prog');
    let tick = false;
    function upd() {
      const m = document.documentElement.scrollHeight - innerHeight;
      if (bar) bar.style.transform = 'scaleX(' + (m > 0 ? Math.min(scrollY / m, 1) : 0) + ')';
      tick = false;
    }
    addEventListener('scroll', function () {
      if (!tick) { tick = true; requestAnimationFrame(upd); }
    }, { passive: true });
    upd();

    if (!('IntersectionObserver' in window)) return;
    const els = document.querySelectorAll('.first .hero .w>div:not(.leaf),.head,.svc article,.doc,.work,.why li,.steps>div,.book .grid>div,.book form,.pbox,.pnote,.rev,.g,.irow');
    const io = new IntersectionObserver(function (es) {
      es.forEach(function (e) {
        if (e.intersectionRatio >= 0.12) e.target.classList.add('in');
        else if (!e.isIntersecting) e.target.classList.remove('in');
      });
    }, { threshold: [0, 0.12], rootMargin: '0px 0px -3% 0px' });

    els.forEach(function (el) {
      const sib = Array.prototype.indexOf.call(el.parentNode.children, el);
      el.style.setProperty('--d', (Math.min(sib, 6) * 0.1).toFixed(2) + 's');
      el.classList.add('rv');
      io.observe(el);
    });

    const links = {};
    document.querySelectorAll('nav a').forEach(function (a) {
      links[a.getAttribute('href').slice(1)] = a;
    });
    const so = new IntersectionObserver(function (es) {
      es.forEach(function (e) {
        if (e.isIntersecting) {
          for (const k in links) links[k].classList.remove('act');
          if (links[e.target.id]) links[e.target.id].classList.add('act');
        }
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    document.querySelectorAll('section[id]').forEach(function (s) { so.observe(s); });
  })();

  function refreshAll() {
    renderWorks();
    syncDoctorCards();
  }

  refreshAll();
  window.addEventListener('dp:langchange', refreshAll);
})();