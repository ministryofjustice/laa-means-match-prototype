var version = '/v13/'

module.exports = function (router) {


// // Which type of case question
// router.post(version + 'case-type-answer', function (req, res) {
//   if (req.session.data['case-type'] == "Civil certificated or licensed legal work")
//     {
//       res.redirect(version + 'which-type-of-case')
//     } else {
//       res.redirect(version + 'start-page')
//     }
// })

// Family legal service question
router.post(version + 'family-legal-service-answer', function (req, res) {
  if (req.session.data['legal-service'] == "Help with family mediation")
    {
      res.redirect(version + 'family-legal-service')
      // refresh
    } 
    else
    {
      res.redirect(version + 'family-type-of-case')
    }
})

// Exceptional Case Funding (ECF) question
router.post(version + 'ecf-answer', function (req, res) {
  if (req.session.data['ecf'] == "Yes")
    {
      res.redirect(version + 'ecf-dropout')
    } else {
      res.redirect(version + 'legal-aid-before')
    }
})

// Legal aid before question
router.post(version + 'legal-aid-before-answer', function (req, res) {
  if (req.session.data['legal-aid-before'] == "Yes, about the same matter")
    {
      res.redirect(version + 'legal-aid-before-2')
    } 
    else if (req.session.data['legal-aid-before'] == "Yes, about a different matter")
    {
      res.redirect(version + 'client-details')
    }
    else
    {
      res.redirect(version + 'client-details')
    }
})

// Does client have home address question
router.post(version + 'does-client-have-address-answer', function (req, res) {
  if (req.session.data['have-address'] == "No, they have no fixed address")
    {
      res.redirect(version + 'means-required')
    } else {
      res.redirect(version + 'client-find-address')
    }
})

// Means assessment required question
router.post(version + 'means-required-answer', function (req, res) {
  if (req.session.data['means-required'] == "No")
    {
      res.redirect(version + 'non-means')
    } else {
      res.redirect(version + 'check-answers-client-details')
    }
})

// Do they have evidence question
router.post(version + 'evidence-answer', function (req, res) {
  if (req.session.data['evidence'] == "No")
    {
      res.redirect(version + 'no-evidence-reason')
    } else {
      res.redirect(version + 'evidence-income')
    }
})

// No evidence reason question
router.post(version + 'no-evidence-reason', function (req, res) {
  if (req.session.data['evidence'] == "No")
    {
      res.redirect(version + 'check-answers-evidence-none')
    } else {
      res.redirect(version + 'check-answers-evidence')
    }
})

// Evidence - income question
router.post(version + 'evidence-income', function (req, res) {
    res.redirect(version + 'evidence-capital');
  });

// Evidence - capital question
router.post(version + 'evidence-capital', function (req, res) {
    res.redirect(version + 'check-answers-evidence');
  });

// Check answers - evidence 
router.post(version + 'check-answers-evidence', function (req, res) {
    req.session.data['evidenceComplete'] = true;
    res.redirect(version + 'task-list-means-complete');
  });

// Client declaration
router.post(version + 'client-declaration', function (req, res) {
    req.session.data['declarationComplete'] = true;
    res.redirect(version + 'task-list-means-complete');
  });


// GET for task list
router.get(version + 'task-list-means-complete', function (req, res) {
    res.render(version + 'task-list-means-complete', {
        data: req.session.data,
    });
});



// Confirmation page
router.post(version + 'confirmation', function (req, res) {
    req.session.data['caseComplete'] = true;
    res.redirect(version + 'case-list');
  });


}
