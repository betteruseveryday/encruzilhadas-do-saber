// ============================================================
// CONFIGURAÇÕES — atualize estes valores antes de publicar
// ============================================================
// Update these values before going live

const CONFIG = {

  // Número do WhatsApp — somente dígitos, com código do país (55 = Brasil)
  // Exemplo: '5511999999999'
  whatsapp: '55SEU_NUMERO_AQUI',

  // Preços das terapias
  precos: {
    tarot: {
      sessaoAvulsa:   'R$ [PLACEHOLDER]',
      pacote3Sessoes: 'R$ [PLACEHOLDER]',
    },
    psicoterapia: {
      sessaoAvulsa:  'R$ [PLACEHOLDER]',
      pacoteMensal:  'R$ [PLACEHOLDER]',
    },
    cortes: {
      ritualIndividual:   'R$ [PLACEHOLDER]',
      ritualMais30Dias:   'R$ [PLACEHOLDER]',
    },
    astral: {
      sessaoAvulsa:    'R$ [PLACEHOLDER]',
      pacoteCombinado: 'R$ [PLACEHOLDER]',
    },
  },

};

// ── Helpers — não modificar abaixo desta linha ──

function waLink(msg) {
  const num = CONFIG.whatsapp;
  if (!num || num.includes('[') || num.includes('SEU_NUMERO')) {
    return '#';   // WhatsApp ainda não configurado
  }
  return 'https://wa.me/' + num + '?text=' + encodeURIComponent(msg);
}

function injectPrices() {
  document.querySelectorAll('[data-preco]').forEach(function(el) {
    var keys  = el.dataset.preco.split('.');
    var value = CONFIG.precos;
    keys.forEach(function(k) { value = value && value[k]; });
    if (value) el.textContent = value;
  });
}

function injectWaLinks() {
  document.querySelectorAll('[data-wa]').forEach(function(el) {
    var link = waLink(el.dataset.wa);
    el.href = link;
    if (link !== '#') el.setAttribute('target', '_blank');
    el.setAttribute('rel', 'noopener noreferrer');
  });
}

document.addEventListener('DOMContentLoaded', function() {
  injectPrices();
  injectWaLinks();
});
